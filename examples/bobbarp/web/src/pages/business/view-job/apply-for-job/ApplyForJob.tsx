import React, { useState } from 'react';
import { Button, Card, Form, Row, Icon } from 'slate-frontend';
import { ApplyForJobProps, ApplyForJobState, defaultApplyForJobState } from './';
import { businessService } from '../../../../app/service/business';

export function ApplyForJob({ job }: ApplyForJobProps) {
  const [state, setState] = useState<ApplyForJobState>(defaultApplyForJobState);

  if (!job?.applicationRequired) {
    return null;
  }

  function setContent(content: string): void {
    setState({
      ...state,
      content,
    });
  }

  function setSpinner(showSpinner: boolean): void {
    setState({
      ...state,
      showSpinner,
    })
  }

  async function submitApplication(): Promise<void> {
    setSpinner(true);
    await businessService.applyForJob(job!.id, state.content);
    setState({
      ...state,
      showSpinner: false,
      showSuccess: true,
    })
  }

  const isDisabled: boolean = state.showSpinner || job?.alreadyApplied || state.content === '';

  return (
    <Card header="Job Application">
      {
        state.showSuccess && (
          <div style={{ textAlign: 'center' }}>
            <Icon className="fa-5x text-success" type="check"/>
            <p>Your job application has been sent to {job?.business?.name}</p>
          </div>
        )
      }
      {
        job?.alreadyApplied && (
          <div style={{ textAlign: 'center' }}>
            <Icon className="fa-5x text-info" type="sync"/>
            <p>Your application is being reviewed.</p>
          </div>
        )
      }
      {
        !state.showSuccess && !job?.alreadyApplied && (
         <>
           <div className="container" style={{ padding: 0 }}>
             <b>Note:</b>
             <p>Once you submit an application, you cannot make any changes to it.</p>
           </div>
           <Form className="container mt-3" onSubmit={submitApplication}>
             <Row>
               <h4>Why should you be hired?</h4>
               <textarea className="form-control" value={state.content} placeholder="Tell us why you're the perfect candidate in under 100 words." rows={4} onChange={e => setContent(e.target.value)}/>
             </Row>
             <Row className="mt-3">
               <div style={{ width: '50%' }}/>
               <div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
                 <button className="btn btn-success" disabled={isDisabled} type="submit">Submit</button>
               </div>
             </Row>
           </Form>
         </>
        )
      }
    </Card>
  )
}
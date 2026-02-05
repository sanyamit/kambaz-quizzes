import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import IndividualAssignmentControlButtons from "./IndividualAssignmentControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./assignmentsControls";
import { VscTriangleDown } from "react-icons/vsc";
import Link from "next/link"; 

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <div className="mt-4">
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center"> 
              <div>
               <BsGripVertical className="me-2 fs-3" /> 
               <VscTriangleDown className="me-2 fs-5" />
               ASSIGNMENTS
              </div>
              <div className="d-flex align-items-center">
                  <span className="border rounded-pill px-3 py-1 me-2">40% of Total</span>
                <AssignmentControlButtons />
              </div>
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <SlNote className="me-2 fs-1 mt-1 text-success"/>
                  <div className="flex-grow-1">
                    <div>
                      <Link href="/courses/1234/assignments/123" className="text-dark text-decoration-none">A1</Link> <IndividualAssignmentControlButtons />
                    </div>
                    <div className="small mt-1">
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-muted"> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <SlNote className="me-2 fs-1 mt-1 text-success" />
                  <div className="flex-grow-1">
                    <div>
                      <Link href="/courses/1234/assignments/124" className="text-dark text-decoration-none">A2</Link> <IndividualAssignmentControlButtons />
                    </div>
                    <div className="small mt-1">
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-muted"> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <SlNote className="me-2 fs-1 mt-1 text-success" />
                  <div className="flex-grow-1">
                    <div>
                      <Link href="/courses/1234/assignments/125" className="text-dark text-decoration-none">A3</Link> <IndividualAssignmentControlButtons />
                    </div>
                    <div className="small mt-1">
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-muted"> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}
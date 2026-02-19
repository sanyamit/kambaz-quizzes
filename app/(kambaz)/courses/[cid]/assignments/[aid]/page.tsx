"use client";
import { useParams } from "next/navigation";
import * as db from "../../../../database";
import { Form, FormLabel, FormControl, FormSelect, FormCheck, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = (db.assignments as any[]).find((a) => a._id === aid);

  if (!assignment) {
    return <div className="p-4">Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <div className="mb-3">
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          <FormControl
            id="wd-name"
            type="text"
            defaultValue={assignment.title}
          />
        </div>

        <div className="mb-3">
          <FormControl
            as="textarea"
            id="wd-description"
            rows={10}
            defaultValue={assignment.description}
          />
        </div>

        <Row className="mb-3">
          <FormLabel column sm={3} className="text-end">
            Points
          </FormLabel>
          <Col sm={9}>
            <FormControl
              id="wd-points"
              type="number"
              defaultValue={assignment.points}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={3} className="text-end">
            Assignment Group
          </FormLabel>
          <Col sm={9}>
            <FormSelect id="wd-group">
              <option>ASSIGNMENTS</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={3} className="text-end">
            Display Grade as
          </FormLabel>
          <Col sm={9}>
            <FormSelect id="wd-grade">
              <option>Percentage</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={3} className="text-end">
            Submission Type
          </FormLabel>
          <Col sm={9}>
            <div className="border p-3">
              <FormSelect id="wd-type" className="mb-3">
                <option>Online</option>
              </FormSelect>

              <FormLabel className="fw-bold mb-2">Online Entry Options</FormLabel>

              <FormCheck type="checkbox" id="wd-text-entry"    label="Text Entry"          className="mb-2" />
              <FormCheck type="checkbox" id="wd-website-url"   label="Website URL"         className="mb-2" defaultChecked />
              <FormCheck type="checkbox" id="wd-media"         label="Media Recordings"    className="mb-2" />
              <FormCheck type="checkbox" id="wd-annotation"    label="Student Annotation"  className="mb-2" />
              <FormCheck type="checkbox" id="wd-file-uploads"  label="File Uploads" />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={3} className="text-end">
            Assign
          </FormLabel>
          <Col sm={9}>
            <div className="border p-3">
              <div className="mb-3">
                <FormLabel htmlFor="wd-assign-to">Assign to</FormLabel>
                <FormControl id="wd-assign-to" type="text" defaultValue="Everyone" />
              </div>

              <div className="mb-3">
                <FormLabel htmlFor="wd-due-date">Due</FormLabel>
                <FormControl
                  id="wd-due-date"
                  type="date"
                  defaultValue={assignment.dueDate}
                />
              </div>

              <Row>
                <Col md={6}>
                  <div>
                    <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
                    <FormControl
                      id="wd-available-from"
                      type="date"
                      defaultValue={assignment.availableFromDate}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <FormLabel htmlFor="wd-until">Until</FormLabel>
                    <FormControl
                      id="wd-until"
                      type="date"
                      defaultValue={assignment.availableUntilDate}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end gap-2">
          <Link href={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Link href={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

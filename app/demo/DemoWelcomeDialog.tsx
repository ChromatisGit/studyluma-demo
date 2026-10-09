import { ArrowRight } from "lucide-react";
import { Form, useLocation } from "react-router";
import { Card, CardBody, Dialog } from "@chromatis/base/ui";
import TEXT from "./demo.de.json";

export interface DemoWelcomeDialogProps {
  open: boolean;
  onClose: () => void;
  onTeacherSubmit: () => void;
  courseTitle: string;
}

/** A choice in the dialog: one full-width button inside a framework card. */
function Choice({
  title,
  text,
  current,
}: {
  title: string;
  text: string;
  current?: boolean;
}) {
  return (
    <Card
      kind="content"
      orientation="horizontal"
      border={current ? "strong" : "default"}
    >
      <CardBody>
        <button type="submit" className="card__link card__title demo-choice">
          {title}
        </button>
        <span className="card__meta">{text}</span>
      </CardBody>
      <ArrowRight className="card__cue" aria-hidden="true" />
    </Card>
  );
}

/**
 * Shown once when the demo opens. The demo starts as a student; the
 * teacher choice switches the stubbed role and stays on the page.
 */
export function DemoWelcomeDialog({
  open,
  onClose,
  onTeacherSubmit,
  courseTitle,
}: DemoWelcomeDialogProps) {
  const location = useLocation();
  return (
    <Dialog
      open={open}
      onOpenChange={(next) => !next && onClose()}
      title={TEXT.welcome.title}
      closeLabel={TEXT.welcome.close}
    >
      <div className="stack">
        <p>{TEXT.welcome.intro.replace("{course}", courseTitle)}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <Choice
            title={TEXT.welcome.student}
            text={TEXT.welcome.studentText}
            current
          />
        </form>
        <Form method="post" action="/viewer" onSubmit={onTeacherSubmit}>
          <input type="hidden" name="role" value="teacher" />
          <input type="hidden" name="redirectTo" value={location.pathname} />
          <Choice
            title={TEXT.welcome.teacher}
            text={TEXT.welcome.teacherText}
          />
        </Form>
        <p className="small muted">{TEXT.welcome.hint}</p>
      </div>
    </Dialog>
  );
}

import { useState } from "react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router";
import Course, { loader } from "studyluma/app/routes/course";
import { DemoWelcomeDialog } from "../../demo/DemoWelcomeDialog";
import "../../demo/demo.css";

export { loader };

/** The website's course page; `?welcome=1` greets new demo visitors. */
export default function DemoCourse() {
  const { course } = useLoaderData<typeof loader>();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(params.has("welcome"));
  return (
    <>
      <Course />
      <DemoWelcomeDialog
        open={open}
        courseTitle={course.title}
        onClose={() => {
          setOpen(false);
          navigate(".", { replace: true });
        }}
      />
    </>
  );
}

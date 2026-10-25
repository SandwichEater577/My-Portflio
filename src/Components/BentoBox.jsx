import { projects } from "./../Data/LayoutData.js";

export default function BentoBox() {
  return (
    <>
      <div id="bento-box">
        {projects.map((element) => (
          <div key={element.id}>{element.title}</div>
        ))}
      </div>
    </>
  );
}

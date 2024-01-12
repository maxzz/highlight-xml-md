import { HighlightMdDemo } from "./2-demo/demo-highlight-md";
import { HighlightXmlDemo } from "./2-demo/demo-highlight-xml";

export function Section2_Main() {
    return (
        <div className="h-full overflow-auto smallscroll">
            {/* <HighlightXmlDemo /> */}
            <HighlightMdDemo />
        </div>
    );
}

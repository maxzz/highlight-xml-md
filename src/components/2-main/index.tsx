import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import { HighlightMdDemo } from "./2-demo/demo-highlight-md";
import { HighlightXmlDemo } from "./2-demo/demo-highlight-xml";

function TableInTabs() {
    return (
        <Tabs defaultValue="tab1">
            <TabsList>
                <TabsTrigger value="tab1">XML</TabsTrigger>
                <TabsTrigger value="tab2">MD</TabsTrigger>
            </TabsList>

            <TabsContent value="tab1">
                <HighlightXmlDemo className="mx-auto p-4 max-w-[640px] bg-background border-muted-foreground/50 border rounded-md shadow" />
            </TabsContent>

            <TabsContent value="tab2">
                <HighlightMdDemo className="mx-auto p-4 max-w-[640px] border-muted-foreground/50 border rounded-md shadow" />
            </TabsContent>

        </Tabs>
    );
}

export function Section2_Main() {
    return (
        <div className="p-4 h-full overflow-auto smallscroll">
            <TableInTabs />
        </div>
    );
}

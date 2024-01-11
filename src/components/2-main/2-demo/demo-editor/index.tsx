import { SyntaxHighlighterXml } from "@/components/ui/SyntaxHighlighterXml";

const CODE_ORG = `
<?xml version="1.0" encoding="UTF-8"?>
<manifest>
	<descriptor
		id="{85fe3caa-4149-421a-bd17-d37e130d2703}"
		created="1d35f18 ac2abf52"
		modified="1d4931f 4157edbe"
		version="2.4.3"
	/>
	<forms>
		<form>
			<detection
				caption="CA Administration Console"
				web_ourl="https://secure5a.arcot.com/arcotadmin/adminlogin.htm"
				web_murl="https://secure5a.arcot.com/arcotadmin/adminlogin.htm"
				web_qurl="https://secure5a.arcot.com/arcotadmin/adminlogin.htm"
				web_checkurl="1"
				names_ext="96_:Shell DocObject View:9_100000:a_100000:Internet Explorer_Server:https^2dot;//secure5a^dot;arcot^dot;com/arcotadmin/adminlogin^dot;htm:10_40:CA Administration Console:2a_:0 0 0 0:0 106 1600 870:0 106 1583 870:697 368 1027 397:101:groupForm^dot;^dot;orgname:groupForm:&lt;input name=&quot;orgname&quot; class=&quot;loginTextBox&quot; autofocus=&quot;&quot; required=&quot;&quot; oninput=&quot;setCustomValidity(&apos;&apos;)&quot; oninvalid=&quot;this^dot;setCustomValidity(&apos;Please enter your organization name^dot;&apos;)&quot; type=&quot;text&quot; value=&quot;&quot; data-dpmaxz-eid=&quot;1&quot;&gt;:2b_100:NEXT:697 416 785 441"
				processname="%25ProgramFiles%25\Internet Explorer\iexplore.exe"
				commandline="%25ProgramFiles%25\Internet Explorer\iexplore.exe"
			/>
			<options
				choosename="3D Secure Organization"
				quicklink="3D Secure Organization"
				autoprompt="1"
				usequicklink="1"
			/>
			<fields>
				<field
					displayname="Organization Name"
					type="edit"
					dbname="{31cbcbea-ebae-4ef9-89f8-e5ff9b7b5049}"
					path_ext="[p4a]0.0.1.|0.2.1.|0.3.1.|0.3.4.5|0.6.4.7|0.8..[loc]9|a|a|a|b|c[sid]d.e.f..10"
					useit="1"
				/>
				<field
					displayname="NEXT"
					type="button"
					dbname="{02a138ea-ec4c-425f-9432-dc8ed88d6897}"
					path_ext="[p4a]0.0.1.|0.2.1.|0.3.1.|0.3.4.5|0.6.4.7|0.11..12[loc]9|a|a|a|b|13"
					submit="1"
					useit="1"
				/>
			</fields>
		</form>
	</forms>
</manifest>
`;

export function EditorDemo() {
    return (
        <div className="mx-auto p-4 w-[96%] max-w-[640px] text-xs border-muted-foreground/50 border rounded-md opacity-60 overflow-auto smallscroll">
            <SyntaxHighlighterXml>
                {CODE_ORG}
            </SyntaxHighlighterXml>
        </div>
    );
}

import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
import AdminDocNavBar from "./DocNavBar";
import './App.css';

function ViewSubmission(){
   
    const docs = [
        { 
            uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
            fileType : "docx"
        },
    
    ];
    
    return(
        <div>
        <AdminDocNavBar />
        <p></p>
                <DocViewer 
                    documents={docs} 
                    pluginRenderers={DocViewerRenderers} 
                    style={{height:1000}}
                />
    </div>
);
}

export default ViewSubmission;
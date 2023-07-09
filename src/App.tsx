import { DocumentEditor } from "@onlyoffice/document-editor-react";

function App() {
  const config = {
    document: {
      fileType: "docx",
      title: "Example Document",
      key: "Khirz6zTPdfd7",
      url: "https://filesamples.com/samples/document/docx/sample4.docx",
    },
    documentType: "word",
    editorConfig: {
      mode: "view",
      lang: "en-US",
      user: {
        id: "userID",
        name: "userName",
      },
    },
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DocumentEditor
        id="docxEditor"
        documentServerUrl={import.meta.env.VITE_DOCUMENT_SERVER_URL!}
        config={config}
        // events_onDocumentReady={onDocumentReady}
        // onLoadComponentError={onLoadComponentError}
      />
    </div>
  );
}

export default App;

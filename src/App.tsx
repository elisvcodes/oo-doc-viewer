import { DocumentEditor } from "@onlyoffice/document-editor-react";
import { useState } from "react";
import docs from "./data/docs.json";

interface Doc {
  fileType: string;
  title: string;
  key: string;
  url: string;
  documentType: string;
}

function App() {
  const [doc, setDoc] = useState<Doc | null>();

  const handleDoc = (key: string) => {
    const filteredResult = docs.find((doc) => doc.key === key);
    setDoc(filteredResult);
  };

  const config = {
    document: {
      fileType: doc?.fileType || "",
      title: doc?.title || "",
      key: doc?.key || "",
      url: doc?.url || "",
    },
    documentType: doc?.documentType || "word",
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
    <div style={{ width: "100vw", height: "calc(100vh - 72px)" }}>
      {docs.map((doc) => {
        return (
          <div key={doc.key}>
            <p
              onClick={() => handleDoc(doc.key)}
              style={{
                cursor: "pointer",
                color: "#0000EE",
                textDecoration: "underline",
              }}
            >
              {doc.title}
            </p>
          </div>
        );
      })}

      {!!doc && (
        <DocumentEditor
          id="Editor"
          documentServerUrl={import.meta.env.VITE_DOCUMENT_SERVER_URL!}
          config={config}
          // events_onDocumentReady={onDocumentReady}
          // onLoadComponentError={onLoadComponentError}
        />
      )}
    </div>
  );
}

export default App;

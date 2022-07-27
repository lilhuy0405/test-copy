import { useState } from "react";
import * as CopyToClipboard  from "react-copy-to-clipboard";
const Copy = () => {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <CopyToClipboard text="Em huy đz trong clipboard :v">
        <button>Copy to clipboard</button>
      </CopyToClipboard>
      <div>
        <textarea
          rows={5}
          cols={10}
          style={{width: "500px", marginTop: "10px"}}
          placeholder="paste what you've copied here"
        />
      </div>
    </>
  );
};

export default Copy;

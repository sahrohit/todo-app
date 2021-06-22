import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [{ title, content }, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function buttonClick(event) {
    props.addNote({
      title: title,
      content: content,
    });
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  function expanded() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            autoComplete="off"
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={title}
          />
        ) : null}
        <textarea
          onClick={expanded}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={buttonClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

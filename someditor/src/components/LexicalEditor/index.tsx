import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { Divider, Radio, Space } from "antd";
import {
  INDENT_CONTENT_COMMAND,
  KEY_TAB_COMMAND,
  OUTDENT_CONTENT_COMMAND,
} from "lexical";

import DraggableBlockPlugin from "../../plugins/DraggableBlockPlugin";
import { ToolbarPlugin } from "../../plugins/Toolbar";

import { AlignDropdown } from "../AlignDropdown";
import BoldButton from "../FontButtons/BoldButton";
import ItalicButton from "../FontButtons/ItalicButton";
import RedoButton from "../RedoButton";
import TextColorPicker from "../TextColorPicker";
import UndoButton from "../UndoButton";

import s from "./styles.module.css";

const isEditable = true;

const Placeholder = () => {
  return <div className="editor-placeholder">Enter some rich text...</div>;
};

export const LexicalEditor = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.setEditable(isEditable);
  }, []);

  useEffect(() => {
    editor.registerCommand(
      KEY_TAB_COMMAND,
      (payload) => {
        const event: KeyboardEvent = payload;
        event.preventDefault();
        return (editor as any).dispatchCommand(
          event.shiftKey ? OUTDENT_CONTENT_COMMAND : INDENT_CONTENT_COMMAND
        );
      },
      4
    );
  }, [editor]);

  return (
    <div className={s.wrapper}>
      <div className={s.toolbar}>
        <ToolbarPlugin>
          <UndoButton />
          <RedoButton />
          <Divider className={s.divider} type="vertical" />
          <AlignDropdown />
          <Divider className={s.divider} type="vertical" />
          <Radio.Group>
            <Space direction="horizontal">
              <BoldButton />
              <ItalicButton />
              <TextColorPicker />
            </Space>
          </Radio.Group>
        </ToolbarPlugin>
      </div>
      <div className={s.editorInner}>
        <RichTextPlugin
          contentEditable={<ContentEditable className={s.editorInput} />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <ListPlugin />
        <LinkPlugin />
        <DraggableBlockPlugin />
      </div>
    </div>
  );
};

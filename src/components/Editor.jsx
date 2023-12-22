import React, { useEffect, useRef } from 'react'
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import { Socket } from 'socket.io-client';
import ACTIONS from '../pages/Actions';

const Editor = ({socketRef, roomId , onCodeChange}) => {
  const EditorRef = useRef(null);
  useEffect(() => {
    async function init() {
        EditorRef.current = CodeMirror.fromTextArea(
            document.getElementById('realTimeEditor'),
            {
                mode: { name: 'javascript', json: true },
                theme: 'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            });

            EditorRef.current.on('change', (instance, changes) => {
              const { origin } = changes;
              const code = instance.getValue();
              onCodeChange(code);
              if (origin !== 'setValue') {
                  socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                      roomId,
                      code,
                  });
              }
          });
            
    }
    init();
  }, []);
  useEffect(()=> {
    if(socketRef.current){
      socketRef.current.on(ACTIONS.CODE_CHANGE , ({code}) => {
        if(code !== null){
          EditorRef.current.setValue(code);
        }
      })
    }
    return () => {
      socketRef.current.off(ACTIONS.CODE_CHANGE);
  };
  },[socketRef.current]);
  
  return <textarea id='realTimeEditor'/>
    
};

export default Editor
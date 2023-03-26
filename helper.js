import React from 'react';
import { createWorker } from 'tesseract.js';


  export const getDataFromAadhar=async(path)=>{
    let imagePath='';
    if(path && path!=='' && path.length>0){
        imagePath=path;
    }else{
        imagePath='https://tesseract.projectnaptha.com/img/eng_bw.png';
    }
    const worker = createWorker({
        logger: m => console.log(m)
      });
       
      (async () => {
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
        console.log(data);
        await worker.terminate();
        return data;
      })();
  }
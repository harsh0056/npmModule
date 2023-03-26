import React from 'react';
import { getAadharFrontDetails } from './helper';

function isNumber(numStr) {
    return !isNaN(parseFloat(numStr));
  }

export const getAadharFrontDetails = (benefName,aadharLines) => {

    

    const aadharDetails = {
      aadharNumber: '',
      aadharName: benefName,
      aadharDOB: '',
      aadharGender: '',
    }
    aadharLines.map((line) => {
      
      if (line.words.length === 4) {
        let aadharNum = '';
        line.words.map((symbol) => {
          if (symbol.symbols.length===4 && isNumber(symbol.text)) {
            aadharNum += symbol.text + ' ';
          }
        })
        if(aadharDetails.aadharNumber===''){
          aadharDetails.aadharNumber = aadharNum;
        }
        
      }
      if (line.text.includes('Male')) {
        aadharDetails.aadharGender = 'male';
      }
      if (line.text.includes('Female')) {
        aadharDetails.aadharGender = 'female';
      }
      if (line.text.includes('DOB')) {
        line.words.map((Symbol) => {
          if (Symbol.symbols.length === 10) {
            aadharDetails.aadharDOB = Symbol.text;
          }
        })
      }
    })
    console.log(aadharDetails, "aadhar details are");
    return aadharDetails;
  }


export default getAadharFrontDetails;
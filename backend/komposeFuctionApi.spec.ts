import { expect, test } from "@playwright/test";
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';


const BOTKEY= 'a98985dc-596c-48dd-a98e-00ebca5bf309';

const multiKomposeFunction=[
  {
  "appId": "52db2ee99ec80d35bf7babc0883ffaf8",
  "botId": "kompss-rqk8k"},
  {"appId": "52db2ee99ec80d35bf7babc0883ffaf8worng",
  "botId": "kompss-rqk8kwrong"},
  {"appId": "52db2ee99ec80d35bf7babc0883ffaf81",
  "botId": "kompss-rqk8k1"}
]
// local variable and configuration
test.use({
  baseURL:"https://api.kommunicate.io"
})

test('should create a bug report', async ({ request,baseURL }) => {

  const _response = await request.post(`${baseURL}/rest/ws/bot/${BOTKEY}/function`, {
    data: {
        "functionKey": "MYfirstfunction36",
       "name": "this is my name",
       "body": "this is my body",
    }, headers:{
        "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNzAyMTUsImFwcGxpY2F0aW9uSWQiOiI1MmRiMmVlOTllYzgwZDM1YmY3YmFiYzA4ODNmZmFmOCIsImVtYWlsIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJwYXNzd29yZCI6IiQyYiQxMCRsMUpTLkNtRWRENlVoUTRmSUEvYzR1Tkc3NU9JelUzeFZkd0FpUkJJRlZSMnNvYnl0UHVDYSIsInVzZXJOYW1lIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJ0eXBlIjozLCJnZW5lcmF0ZWRBdCI6MTY2Mjc1MDIxNzM1MywiZW5jcnlwdGVkIjpmYWxzZX0sImlhdCI6MTY2Mjc1MDIxNywiZXhwIjoxNjY1MzQyMjE3fQ.F49JfXtLIbiDJa-k5E7tAfRk7X5d7isH6XblF9RAia0",
        "Content-Type":"application/json"
    }
  });
  console.log(await _response.json())
  expect(_response.status()).toBe(409);
  // const rep = JSON.parse(await response.text())
  // console.log(rep);  
// _reponse: this is private variable.
});

test('fetch bot details', async({request,baseURL}) => {
  const _response =await request.post(`${baseURL}/rest/ws/bot/detail`, {
     data: {
      "appId": "52db2ee99ec80d35bf7babc0883ffaf8",
      "botId": "kompss-rqk8k",
     },headers:{
      "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNzAyMTUsImFwcGxpY2F0aW9uSWQiOiI1MmRiMmVlOTllYzgwZDM1YmY3YmFiYzA4ODNmZmFmOCIsImVtYWlsIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJwYXNzd29yZCI6IiQyYiQxMCRsMUpTLkNtRWRENlVoUTRmSUEvYzR1Tkc3NU9JelUzeFZkd0FpUkJJRlZSMnNvYnl0UHVDYSIsInVzZXJOYW1lIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJ0eXBlIjozLCJnZW5lcmF0ZWRBdCI6MTY2Mjc1MDIxNzM1MywiZW5jcnlwdGVkIjpmYWxzZX0sImlhdCI6MTY2Mjc1MDIxNywiZXhwIjoxNjY1MzQyMjE3fQ.F49JfXtLIbiDJa-k5E7tAfRk7X5d7isH6XblF9RAia0",
      "Content-Type":"application/json"
  }
  })
  console.log(await _response.json())
});





multiKomposeFunction.forEach(jsondata => {
  test(`parammetrize test ${jsondata.appId}`,async ({request,baseURL}) =>{

    const _response= await request.post(`${baseURL}/rest/ws/bot/detail`,{
      data:{
        "appId": jsondata.appId,
        "botId": jsondata.botId,
      },headers:{
        "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNzAyMTUsImFwcGxpY2F0aW9uSWQiOiI1MmRiMmVlOTllYzgwZDM1YmY3YmFiYzA4ODNmZmFmOCIsImVtYWlsIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJwYXNzd29yZCI6IiQyYiQxMCRsMUpTLkNtRWRENlVoUTRmSUEvYzR1Tkc3NU9JelUzeFZkd0FpUkJJRlZSMnNvYnl0UHVDYSIsInVzZXJOYW1lIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJ0eXBlIjozLCJnZW5lcmF0ZWRBdCI6MTY2Mjc1MDIxNzM1MywiZW5jcnlwdGVkIjpmYWxzZX0sImlhdCI6MTY2Mjc1MDIxNywiZXhwIjoxNjY1MzQyMjE3fQ.F49JfXtLIbiDJa-k5E7tAfRk7X5d7isH6XblF9RAia0",
          "Content-Type":"application/json"
      }
    })
    console.log(await _response.json())
    
    });
});


//foreach(record in data) 
const records = parse(fs.readFileSync(path.join(__dirname, '../backend/testData', 'input.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records ){
  test(`bot csv ${record.applicationId}`, async ({request,baseURL }) => {

    const _response= await request.post(`${baseURL}/rest/ws/bot/detail`,{
      data:{
        "appId": record.applicationId,
        "botId": record.bot_id,
      },headers:{
        "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNzAyMTUsImFwcGxpY2F0aW9uSWQiOiI1MmRiMmVlOTllYzgwZDM1YmY3YmFiYzA4ODNmZmFmOCIsImVtYWlsIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJwYXNzd29yZCI6IiQyYiQxMCRsMUpTLkNtRWRENlVoUTRmSUEvYzR1Tkc3NU9JelUzeFZkd0FpUkJJRlZSMnNvYnl0UHVDYSIsInVzZXJOYW1lIjoidmlwaW4rcHJvZGttMDQwODIwMjJAa29tbXVuaWNhdGUuaW8iLCJ0eXBlIjozLCJnZW5lcmF0ZWRBdCI6MTY2Mjc1MDIxNzM1MywiZW5jcnlwdGVkIjpmYWxzZX0sImlhdCI6MTY2Mjc1MDIxNywiZXhwIjoxNjY1MzQyMjE3fQ.F49JfXtLIbiDJa-k5E7tAfRk7X5d7isH6XblF9RAia0",
          "Content-Type":"application/json"
      }
    })
    console.log(record.applicationId, record.bot_id);

    console.log(await _response.json())
  });
};
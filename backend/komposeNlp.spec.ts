import { expect, test } from "@playwright/test";
import ENV from "../utils/env"

const komposeClusterData=[
    {
    "appId": "52db2ee99ec80d35bf7babc0883ffaf8",

    "clusterdata": "",
    "updatedCluster":"Hi"
  },
    {"appId": "52db2ee99ec80d35bf7babc0883ffaf8worng",
   
    "clusterdata": "hi",
    "updatedCluster":"Hi"
  },
    {"appId": "52db2ee99ec80d35bf7babc0883ffaf81",
    
    "clusterdata": "",
    "updatedCluster":""
  }
  ]

  console.log(ENV.BASE_URL);

  komposeClusterData.forEach(jsondata => {
    test(`kompose-nlp cluster test ${jsondata.appId}`,async ({request,baseURL}) =>{
  
      const _response= await request.patch(`${ENV.BASE_URL}/rest/ws/kompose-nlp/cluster`,{
        data:{
            "cluster": {
                "second 2": jsondata.clusterdata,
                "hi how long will it take to proceed": ""
            },
            "addedToBot": false,
            "deleted": false,
            "updatedCluster": {
                "second 2": jsondata.updatedCluster,
                "hi how long will it take to proceed": ""
            },
            "applicationId": jsondata.appId
        },headers:{
          "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3ODUxMSwiYXBwbGljYXRpb25JZCI6IjE0ZDRiYTYyMzA2ZDY1N2QwYzUxNzA5MjhkOTRhN2NlMCIsImVtYWlsIjoidmlwaW4rdGVzdGttMTQwNDIwMjFAa29tbXVuaWNhdGUuaW8iLCJwYXNzd29yZCI6IiQyYiQxMCRjM2RhR24wS1puMUREVU51U2VvbWRlWkhieWJ5ck4zbzJqSE1zWUNiSUtJU3ZtYmJUdmJhUyIsInVzZXJOYW1lIjoidmlwaW4rdGVzdGttMTQwNDIwMjFAa29tbXVuaWNhdGUuaW8iLCJ0eXBlIjozLCJnZW5lcmF0ZWRBdCI6MTY2NDE2MDI2NjAzNiwiZW5jcnlwdGVkIjpmYWxzZX0sImlhdCI6MTY2NDE2MDI2NiwiZXhwIjoxNjY2NzUyMjY2fQ.k5bVj8jMkomibhqGD91DUQw3jjrN4fqymSBcXuURg68",
           "Content-Type":"application/json"
        }
      })
     // console.log(await _response.json())
      _response.body().then(b =>{
        console.log(b)
        return b.includes("references were updated successfull")

      })
      
      });
  });
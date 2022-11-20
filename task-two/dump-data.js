var axios = require('axios');
var data = JSON.stringify({
  query: `query GetData{
                pageTemplateCollection{
                    items{
                      url
                      seo{
                        title
                        description
                        isNoIndex
                      }
                    }
                  }
            }`,
  variables: {}
});

var config = {
  method: 'post',
  url: 'https://graphql.contentful.com/content/v1/spaces/8utyj17y1gom/environments/master?access_token=e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data.data));
})
.catch(function (error) {
  console.log(error);
});

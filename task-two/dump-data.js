var axios = require('axios');
const fs = require('fs')
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
    const preparedData = prepareData(response.data.data.pageTemplateCollection.items)
    console.log(preparedData)
})
.catch(function (error) {
  console.log(error);
});

const prepareData = (data) => {
    return data.map((d) => {
        let url = `https://www.rogers.com${d.url}`
        url = url.replace('/home','')
        let title = d.seo && d.seo.title ? d.seo.title.replace('| Rogers', '- Rogers') : ''
        let description = d.seo && d.seo.description ? d.seo.description.length > 80 ? d.seo.description.substring(0, 80): d.seo.description : ''
        return { url, title, description }
    })
}


// import React, {Component} from 'react';
// import axios from 'axios';

// const API_URL = '';

// class NetFact extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             menuItems : []
//         };
//     }

//     componentDidMount () {
//         // const { getAccessToken } = this.props.auth;
//         // const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
//         // axios.post(
//         //     `https://api.nal.usda.gov/fdc/v1/search?api_key=quo7AGvUxHI6UfdipXOy4eDewRoERsN26EXz5dNs`,
//         //     { generalSearchInput: "beans" },
//         //     { headers: { "Access-Control-Allow-Origin": "*" } }
//         // )
//         //   .then(response => console.log(response))
//         //   .catch(error => this.setState({ message: error.message }));

//         axios.get(
//             `https://api.qwant.com/api/search/images?q=jogging&t=images&count=1&safesearch=1&locale=en_US&uiv=4`,
//         )
//           .then(response => {
//               console.log(response.data)
//             this.setState({menuItems:response.data})
//           })
//           .catch(error => this.setState({ message: error.message }));

//           axios.get(
//             `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=jogging`,
//         )
//           .then(response => {
//               console.log(response.data)
//             this.setState({menuItems:response.data})
//           })
//           .catch(error => this.setState({ message: error.message }));
          
//     }

//     render() {
//         return (
//             <div className="container">
//                 {/* <div className="card-columns">
//                         {this.state.menuItems === null && <p>Loading menu...</p>}
//                         {
//                             this.state.menuItems && this.state.menuItems.map(item => (
//                                 <div key={item.name} class="card">
//                                     <div class="card-header">{item.name}</div>
//                                     <div class="card-body">
//                                         <p class="card-text">{item.description}</p>
//                                         <a href="https://nutritionfacts.org/" class="btn btn-primary">More...</a>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                 </div> */}

//                 {
//                     this.state.menuItems.map((item)=>
//                         <div>
//                             item.title
//                         </div>
//                     )
//                 }
//             </div>
//         );
//     }
// }

// export default NetFact;
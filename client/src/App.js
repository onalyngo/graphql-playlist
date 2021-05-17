import { ApolloClient, ApolloProvider } from '@apollo/client';
// components
import BookList from './components/BookList'



const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
	return (
		<ApolloProvider client={client}>
			<div id='main'>
				<h1>Ninja's Reading List</h1>
				<BookList />
			</div>
		</ApolloProvider>
	)
}

export default App

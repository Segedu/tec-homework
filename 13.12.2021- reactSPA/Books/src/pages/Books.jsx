import { Component } from "react";
import { Redirect } from "react-router-dom";

class Books extends Component {
    state = {
        redirectToDetails: false,
        redirectToAddBook: false
    }

    render() {
        if (this.state.redirectToDetails) {
            return <Redirect to="/BookDetails" />
        }
        if (this.state.redirectToAddBook) {
            return <Redirect to="/AddBook" />
        }
        return (<div>
            <button onClick={() => {
                this.setState({ redirectToAddBook: true })
            }}>Add Book Form</button>
            <table >
                <tbody>
                    <tr>
                        <th>Author</th>
                        <th>Title</th>
                        <th>More Details</th>
                    </tr>
                    {this.props.books.map((book, index) => (
                        <tr key={index}>
                            <td >{book.author}</td>
                            <td>{book.title}</td>
                            <td>
                                <button onClick={() => {
                                    this.props.setCurrentBook(book.author, book.title);
                                    this.setState({ redirectToDetails: true })
                                }}
                                >Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
    }
}

export default Books;
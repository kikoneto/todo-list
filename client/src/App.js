import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { TodoList } from './components/TodoList';

function App() {
    return (
        <div className="App">

            <Header />

            <main className="main">

                <section className="todo-list-container">
                    <h1>Todo List</h1>
                    <div className="table-wrapper">

                        {/* <Loading /> */}

                        <TodoList />

                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
}

export default App;

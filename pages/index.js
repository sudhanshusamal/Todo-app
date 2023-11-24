import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container maxW="7xl">
      <Auth />
      <AddTodo />
      <TodoList />
      <Footer />
    </Container>
  );
}
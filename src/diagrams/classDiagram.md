```mermaid
classDiagram
App <|-- Home
Home <|-- Start View
Home <|-- Question View
Home <|-- PickCategory View
PickCategory View <|-- FetchQuestion
Start View <|-- FetchQuestion

    class App {

    }

    class Home {

    }

    class Start View {
      fetchQuestions()
    }

    class PickCategory View {
      fetchQuestions()
    }

    class Question View {

    }

    class FetchQuestion {

    }
```

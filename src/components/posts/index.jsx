import React from "react"
import "./styles.css"
import Post from "../post/index"

export default function App(){

    const blogPosts = [
      {
        id: 1,
        title: "POST 1",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in lacus lectus. Donec iaculis lorem vel turpis vehicula consequat. Vivamus elementum pellentesque dui. Sed bibendum urna vel maximus lobortis. Phasellus at justo eget massa posuere rhoncus ac at leo. Integer sodales lacus neque, vel tincidunt felis varius sit amet. Duis at tempor urna, eget scelerisque tellus. Donec nec consectetur arcu. Suspendisse sit amet interdum nisi. Sed pharetra nisi sit amet rutrum vulputate. Maecenas magna mauris, dignissim vitae convallis vitae, tempor eu quam. Ut risus magna, ultrices a mattis quis, ornare vel tellus. Proin et gravida augue, sit amet elementum enim.`,
        author: "Author 2",
        imgUrl:
          "https://media.istockphoto.com/id/1244482898/pt/foto/ai-concept-deep-learning-gui.jpg?s=612x612&w=0&k=20&c=bucp1HKJv2jOizTq3PfAB6mhSONQbEt9dhcD4YHL7ac=",
      },
      {
        id: 2,
        title: "POST 2",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in lacus lectus. Donec iaculis lorem vel turpis vehicula consequat. Vivamus elementum pellentesque dui. Sed bibendum urna vel maximus lobortis. Phasellus at justo eget massa posuere rhoncus ac at leo. Integer sodales lacus neque, vel tincidunt felis varius sit amet. Duis at tempor urna, eget scelerisque tellus. Donec nec consectetur arcu. Suspendisse sit amet interdum nisi. Sed pharetra nisi sit amet rutrum vulputate. Maecenas magna mauris, dignissim vitae convallis vitae, tempor eu quam. Ut risus magna, ultrices a mattis quis, ornare vel tellus. Proin et gravida augue, sit amet elementum enim.`,
        author: "Author 2",
        imgUrl:
          "https://media.istockphoto.com/id/1244482898/pt/foto/ai-concept-deep-learning-gui.jpg?s=612x612&w=0&k=20&c=bucp1HKJv2jOizTq3PfAB6mhSONQbEt9dhcD4YHL7ac=",
      },
      {
        id: 3,
        title: "POST 3",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in lacus lectus. Donec iaculis lorem vel turpis vehicula consequat. Vivamus elementum pellentesque dui. Sed bibendum urna vel maximus lobortis. Phasellus at justo eget massa posuere rhoncus ac at leo. Integer sodales lacus neque, vel tincidunt felis varius sit amet. Duis at tempor urna, eget scelerisque tellus. Donec nec consectetur arcu. Suspendisse sit amet interdum nisi. Sed pharetra nisi sit amet rutrum vulputate. Maecenas magna mauris, dignissim vitae convallis vitae, tempor eu quam. Ut risus magna, ultrices a mattis quis, ornare vel tellus. Proin et gravida augue, sit amet elementum enim.`,
        author: "Author 3",
        imgUrl:
          "https://media.istockphoto.com/id/1321462048/pt/foto/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=FVxKRr0sIDeQXUxS1FCNn-IoZb6sQk-MqArfXk-wJqE=",
      },
      {
        id: 4,
        title: "POST 4",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in lacus lectus. Donec iaculis lorem vel turpis vehicula consequat. Vivamus elementum pellentesque dui. Sed bibendum urna vel maximus lobortis. Phasellus at justo eget massa posuere rhoncus ac at leo. Integer sodales lacus neque, vel tincidunt felis varius sit amet. Duis at tempor urna, eget scelerisque tellus. Donec nec consectetur arcu. Suspendisse sit amet interdum nisi. Sed pharetra nisi sit amet rutrum vulputate. Maecenas magna mauris, dignissim vitae convallis vitae, tempor eu quam. Ut risus magna, ultrices a mattis quis, ornare vel tellus. Proin et gravida augue, sit amet elementum enim.`, 
        author: "Sonu Kr",
        imgUrl:
          "https://media.istockphoto.com/id/1295900106/pt/foto/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=0&k=20&c=joiscY6WJHNcxAReKtk7ZMDUzmoUad5kA1YLSMOec9M=",
      },
      {
        id: 5,
        title: "POST 5",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in lacus lectus. Donec iaculis lorem vel turpis vehicula consequat. Vivamus elementum pellentesque dui. Sed bibendum urna vel maximus lobortis. Phasellus at justo eget massa posuere rhoncus ac at leo. Integer sodales lacus neque, vel tincidunt felis varius sit amet. Duis at tempor urna, eget scelerisque tellus. Donec nec consectetur arcu. Suspendisse sit amet interdum nisi. Sed pharetra nisi sit amet rutrum vulputate. Maecenas magna mauris, dignissim vitae convallis vitae, tempor eu quam. Ut risus magna, ultrices a mattis quis, ornare vel tellus. Proin et gravida augue, sit amet elementum enim.`, 
        author: "Victor Arduin",
        imgUrl:
          "https://media.istockphoto.com/id/1295900106/pt/foto/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=0&k=20&c=joiscY6WJHNcxAReKtk7ZMDUzmoUad5kA1YLSMOec9M=",
      },
    ];


  return(
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <div className="posts-item">
            <Post key={index} index={index} post={post} />
        </div>
      ))}
  </div>
  )
} 
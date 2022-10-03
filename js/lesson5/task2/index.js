//1. Правда, що elem.lastChild.nextSibling завжди дорівнює null ?
//2. Правда, що elem.children[0].previousSibling завжди дорівнює null?

// 1-  Утверждение верно. Потому что , elem.lastChild всегда последний, у него нет ссылки nextSibling.
// 2- Утверждение неверно, потому что elem.children[0] – потомок-элемент.
// и перед ним могут быть другие узлы.

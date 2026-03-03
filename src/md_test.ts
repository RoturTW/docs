
export const text = `

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules

___

---

***

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...

## Lists

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

### No Num

- George Washington
* John Adams
+ Thomas Jefferson

1. First list item
   - First nested list item
     - Second nested list item

## Code

Inline \`code\`

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

\`\`\`rs
fn main() -> Result<String, i32> {
  println!("hi \\n hi");
  Err(61);
}
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

https://www.example.com/blog/article#comments

# hi ![Minion](https://octodex.github.com/images/minion.png)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)

## Subscript / Superscript

- 19^th^
- H~2~O

## Alerts

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

## Checkboxes

[ ] bleh
[x] hi

## Columns

@@column
hi
wow
so
basically
crazy
@@column
\`\`\`
crazy
\`\`\`
@@column

## Box

@@box
box :P
@@box

## Tabs

@@tabs
@@tab Js
\`\`\`js
console.log("hi");
\`\`\`
@@tab
@@tab Fsl
\`\`\`rs
fn main() {
  print("hi");
}
\`\`\`
@@tab
@@tabs

`;
# RDF

## What is RDF?

RDF or rotur data format is a simplistic data storage format with support for constraining properties with types and conditions at runtime. It currently only works in javascript based environments.

You can view the source code below

{% @github-files/github-code-block url="https://github.com/RoturTW/.rdf" %}

## How do i use RDF?

RDF is pretty simple to use, just import the version with the highest number in the src folder of the github repo above into whatever project you are making by running the js file to create the RDF class globally.

After the code has been run, you should have access to RDF on the window object.

## Why use RDF?

Well rdf allows you to type restrict specific properties of your data at runtime, meaning you can ensure no bug can just overwrite the data with an invalid type without you noticing. Same with constraints, instead of needing to enforce data constraints as the program level you can instead enforce them as the db level for anything from length checks to maths using a stripped down version of rtr.

## RDF Methods

### .parse()

Parse is the backbone of RDF as it creates an object that you can interact with from your RDF code

```javascript
RDF.parse(`{ number age = 10 where value > 0; }`)
```

### .stringify()

Stringify is how you get your modified RDF code back out and into a string so you can save it or store it in places that don't support the RDF structuring.

```javascript
// RDF.stringify(object, indentation)

console.log(RDF.stringify({"hello":"world"}, 2))
/*
{
  hello = "world";
}
*/
```

### .setProperty()

SetProperty allows you to quickly add any rdf parameter to any js object using the same syntax you use to write the data in the first place.

```javascript
// RDF.setProperty(object, property_string)

my_obj = RDF.parse(`{ number age = 10 where value > 0 }`)
RDF.setProperty(my_obj, "string name = \"James\" where length(value) > 4")
// create a new RDF property on my object, this works on any object including regular json objects
```

## RDF Formatting

### Types

Types can be useful when you want to ensure that a value keeps a specific type of data, for example an age should normally be a number so you can enforce that by just prefixing the name using the type.

<pre class="language-javascript"><code class="lang-javascript">type name = value
/** Type List:
<strong>  object
</strong>  array
<strong>  string
</strong>  number
  boolean
*/
</code></pre>


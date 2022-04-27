(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{657:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"relational-database-management-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relational-database-management-systems","aria-hidden":"true"}},[e._v("#")]),e._v(" Relational Database Management Systems")]),e._v(" "),a("p",[e._v("All Relational Database Management Systems and the databases they manage have the same common elements. These elements include Tables, Keys, Relationships, and SQL.")]),e._v(" "),a("h2",{attrs:{id:"tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables","aria-hidden":"true"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),a("p",[e._v("Imagine a webpage that has a series of HTML tables. One table has a list of product categories - things like Plumbing, Electrical, Hardware, and Sporting Goods. In the table the first column has a number for each category and the second column has the names of the categories. The second table has a list of Products that would be available in those categories. The first column has a unique number for each product. The second column has the name of the Product. The third column has a price for the product and the fourth column has the number for the department where the products belong.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("id")]),e._v(" "),a("th",[e._v("department")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("Electrical")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("Hardware")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("Plumbing")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("Sporting Goods")])])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("id")]),e._v(" "),a("th",[e._v("product")]),e._v(" "),a("th",[e._v("price")]),e._v(" "),a("th",[e._v("department id")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("14 gauge copper wire - 100ft spool")]),e._v(" "),a("td",[e._v("25.00")]),e._v(" "),a("td",[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("Electrical tape - 3-pack")]),e._v(" "),a("td",[e._v("8.50")]),e._v(" "),a("td",[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("16oz Hammer")]),e._v(" "),a("td",[e._v("25.99")]),e._v(" "),a("td",[e._v("2")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v('2" PVC elbow joing')]),e._v(" "),a("td",[e._v("3.49")]),e._v(" "),a("td",[e._v("3")])]),e._v(" "),a("tr",[a("td",[e._v("5")]),e._v(" "),a("td",[e._v("Football")]),e._v(" "),a("td",[e._v("32.99")]),e._v(" "),a("td",[e._v("4")])]),e._v(" "),a("tr",[a("td",[e._v("6")]),e._v(" "),a("td",[e._v("Basketball")]),e._v(" "),a("td",[e._v("34.99")]),e._v(" "),a("td",[e._v("4")])])])]),e._v(" "),a("h2",{attrs:{id:"keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys","aria-hidden":"true"}},[e._v("#")]),e._v(" Keys")]),e._v(" "),a("p",[e._v("In RDBMSs, keys are used for identify specific rows in a table and to connect that row with other rows in other tables.")]),e._v(" "),a("p",[e._v("In our example above the department id in the first column of the first table is the columns containing the table's "),a("strong",[e._v("primary key")]),e._v(". The primary key is a unique identifier for each row of a table and is contains a value that is unique throughout the entire table.")]),e._v(" "),a("p",[e._v("The fourth column of the second table is know as the "),a("strong",[e._v("foreign key")]),e._v(". A foreign key, shares the value with primary key of a row in another table.  Together the foreign key and the primary key create a relationship.")]),e._v(" "),a("h2",{attrs:{id:"relationship"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relationship","aria-hidden":"true"}},[e._v("#")]),e._v(" Relationship")]),e._v(" "),a("p",[e._v("The most important element of relational databases is that the tables of a given database have a defined relationship. These defined relationship are not meant to be arbitrary connections, but ones that occur naturally in the data.")]),e._v(" "),a("p",[e._v("Returning to our example above, the relationship between the two tables can be described like this:")]),e._v(" "),a("ol",[a("li",[e._v("A genre can have many movies")]),e._v(" "),a("li",[e._v("Each movie must belong to one genre")])]),e._v(" "),a("p",[e._v("This is a nature connection or relationship of the data and is defined in the tables by using keys. In the section above, we describe how the first column of the first table and fourth column of the second table share the same values, that is because the primary key and the foreign key connect the two tables together.")]),e._v(" "),a("h2",{attrs:{id:"relationship-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relationship-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Relationship Types")]),e._v(" "),a("p",[e._v("The relationship between the two tables as describe above is what is known as a one-to-many relationship. This is that type of relationship where on one side a piece of data from one row of a table can belong to multiple rows of another table (a genre can have "),a("em",[e._v("many")]),e._v(" movies). Where as on the other side a row a table can only belong to one row of another table (each movie must belong to "),a("em",[e._v("one")]),e._v(" genre). The one-to-many relationship is the most common relationship found in relational databases, but there are others.")]),e._v(" "),a("p",[e._v("There is the many-to-many relationship. Imagine if the rules of the example above was changed like so that a product could belong to many departments. This would create a many-to-many relationship between the two tables: a department can have "),a("em",[e._v("many")]),e._v(" products and a production can belong to "),a("em",[e._v("many")]),e._v(" departments. Now, some RDBMSs do not allow direct many-to-many relationship, and therefor a linking table will need to be created.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("product id")]),e._v(" "),a("th",[e._v("department id")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("2")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("3")])]),e._v(" "),a("tr",[a("td",[e._v("5")]),e._v(" "),a("td",[e._v("4")])]),e._v(" "),a("tr",[a("td",[e._v("6")]),e._v(" "),a("td",[e._v("4")])])])]),e._v(" "),a("p",[e._v("The purpose of a linking table is to create an "),a("em",[e._v("indirect")]),e._v(" many-to-many relationship by creating two one-to-many relationships. This technique is a common practice of creating linking tables is common when working with relational databases.")]),e._v(" "),a("p",[e._v("The final relationship type is the one-to-one relationship. The relationship is extremely rare, and in most case unnecessary, as most one-to-one relationships should be combined to create a single table.")]),e._v(" "),a("h2",{attrs:{id:"structured-query-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structured-query-language","aria-hidden":"true"}},[e._v("#")]),e._v(" Structured Query Language")]),e._v(" "),a("p",[e._v("The Structured Query Language (SQL) is the common scripting language for all relational databases. SQL is simple language with surprisingly few commands, and use to add, remove, read, or update data in a database.")]),e._v(" "),a("p",[e._v("We will learn more about SQL later in this course.")])])}],!1,null,null,null);t.default=o.exports}}]);
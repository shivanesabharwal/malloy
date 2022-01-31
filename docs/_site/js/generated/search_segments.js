window.SEARCH_SEGMENTS = [
  {
    "titles": [
      "Connecting a Database in the VSCode Extension"
    ],
    "paragraphs": [
      "Currently, BigQuery and PostgreSQL are supported.",
      "Click on the Malloy icon on the left side of VS Code. This opens the Malloy view - a view that allows you to view schemas as you work with Malloy models and edit database connections.",
      "In the \"CONNECTIONS\" panel, select \"Edit Connections\". This opens the connection manager page.",
      "Click \"Add Connection\" and fill out the relevant details. See below for database-specific instructions.",
      "Press \"Test\" on the connection to confirm that you have successfully connected to the database",
      "Hit \"Save,\" then dive into writing Malloy!"
    ],
    "path": "/connection_instructions.md"
  },
  {
    "titles": [
      "Connecting a Database in the VSCode Extension",
      "BigQuery"
    ],
    "paragraphs": [
      "Authenticating to BigQuery can be done either via OAuth (using your Google Cloud Account) or with a Service Account Key downloaded from Google Cloud"
    ],
    "path": "/connection_instructions.md"
  },
  {
    "titles": [
      "Connecting a Database in the VSCode Extension",
      "BigQuery",
      "Option 1: OAuth"
    ],
    "paragraphs": [],
    "path": "/connection_instructions.md"
  },
  {
    "titles": [
      "Connecting a Database in the VSCode Extension",
      "BigQuery",
      "Option 2: Service Account"
    ],
    "paragraphs": [
      "Add the relevant database connection information. Once you click save, the password (if you have entered one) will be stored in your system keychain.",
      "To access BigQuery with the Malloy Plugin, you will need to have BigQuery credentials available, and the <a href=\"https://cloud.google.com/sdk/gcloud\">gcloud CLI</a> installed. Once it's installed, open a terminal and type the following:",
      "Add the relevant account information to the new connection, and include the path to the <a href=\"https://cloud.google.com/iam/docs/creating-managing-service-account-keys\">service account key</a>."
    ],
    "path": "/connection_instructions.md"
  },
  {
    "titles": [
      "Connecting a Database in the VSCode Extension",
      "PostgreSQL <em>(in progress)</em>"
    ],
    "paragraphs": [
      "<em>(Development in progress, date/time support is currently incomplete)</em>",
      "<em>These instructions assume you have already installed the <a href=\"https://marketplace.visualstudio.com/items?itemName=malloydata.malloy-vscode\">Malloy extension</a> in VSCode.</em>",
      "<em>Replace <code class=\"language-malloy\">{my_project_id}</code> with the <strong>ID</strong> of the BigQuery project you want to use & bill to. If you're not sure what this ID is, open Cloud Console, and click on the dropdown at the top (just to the right of the \"Google Cloud Platform\" text) to view projects you have access to. If you don't already have a project, <a href=\"https://cloud.google.com/resource-manager/docs/creating-managing-projects\">create one</a>.</em>"
    ],
    "path": "/connection_instructions.md"
  },
  {
    "titles": [
      "eCommerce Walkthrough: An Intro to Malloy Syntax & the VSCode Plugin"
    ],
    "paragraphs": [
      "Malloy queries compile to SQL. As Malloy queries become more complex, the SQL complexity expands dramatically, while the Malloy query remains concise and easier to read.",
      "Let’s illustrate this by asking a straightforward question of a simple ecommerce dataset--how many order items have we sold, broken down by their current status?",
      "The use of <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span></code> in the above query invokes a <code class=\"language-malloy\">SELECT</code> with a <code class=\"language-malloy\">GROUP <span class=\"token keyword\">BY</span></code> in SQL. Malloy also has a <code class=\"language-malloy\"><span class=\"token keyword\">project</span></code> transformation, which will <code class=\"language-malloy\">SELECT</code> without a <code class=\"language-malloy\">GROUP <span class=\"token keyword\">BY</span></code>.",
      "Notice that after you write this, small \"Run | Render\" code lens will appear above the query. Run will show the JSON result, while Render will show a table by default, or a visualization if you've configured one (more on this later). Click the code lens to run the query. This will produce the following SQL:",
      "<img src=\"https://user-images.githubusercontent.com/7178946/130125702-7049299a-fe0f-4f50-aaed-1c9016835da7.gif\" alt=\"Kapture 2021-08-18 at 17 07 03\"/>",
      "Next question: In 2020, how much did we sell to users in each state? This requires filtering to the year 2020, excluding cancelled and returned orders, as well as joining in the users table.",
      "At this point we might notice we’re defining a few things we might like to re-use, so let’s add them to the model:",
      "Having defined this in the model, the VSCode plugin will give us handy \"Outline\" and \"Schema\" tools in the left menu. \"Outline\" provides an interactive navigator of the model, in order, and \"Schema\" shows all of the attributes (both raw fields in the underlying table, and the dimensions, measures, and named queries you've defined in your model).",
      "Our query is now very simple:",
      "To further simplify, we can add this and a couple other queries we’ll frequently use to our model. Once you define these, the VSCode plugin will supply a “Run” button next to each query:",
      "Allowing us to run the following very simple command next time we want to run any of these queries:",
      "Note that queries can be filtered at any level, by inserting filter expressions between square brackets. A filter after an explore applies to the whole explore; one before the fields in a <code class=\"language-malloy\"><span class=\"token keyword\">reduce</span></code> or <code class=\"language-malloy\"><span class=\"token keyword\">project</span></code> transformation applies to that transformation; and one after an aggregate field applies to that aggregate only. See filters documentation for more information on filter expressions. Here's an example with a variety of filter usage:",
      "Queries can contain other nested structures, by including additional transformations as fields, so our named query (<code class=\"language-malloy\">sales_by_month_2020</code>) can also now be called anywhere as a nested structure. Note that these structures can nest infinitely!:",
      "Which can be visualized using a data_style",
      "Putting a few named queries together as nested structures allows us to produce a dashboard with an overview of sales, having written remarkably little code. Use the <code class=\"language-malloy\">dashboard</code> renderer to format the results like this:",
      "<em>Note: To see the SQL being generated by your query, open up a New Terminal in the top menu, then select Output, and pick “Malloy” from the menu on the right.</em>",
      "<em>The following walk-through covers similar concepts to the <a href=\"https://github.com/looker-open-source/malloy/#quick-start-videos\">Quick Start</a> videos in the README. You can find the complete source code for this model <a href=\"https://github.com/looker-open-source/malloy/blob/docs-release/samples/ecommerce/ecommerce.malloy\">here</a>.</em>"
    ],
    "path": "/examples/ecommerce.md"
  },
  {
    "titles": [
      "NTSB Flight Database examples"
    ],
    "paragraphs": [],
    "path": "/examples/faa.md"
  },
  {
    "titles": [
      "NTSB Flight Database examples",
      "Airport Dashboard"
    ],
    "paragraphs": [
      "Where can you fly from SJC? For each destination; Which carriers?  How long have they been flying there?\nAre they on time?"
    ],
    "path": "/examples/faa.md"
  },
  {
    "titles": [
      "NTSB Flight Database examples",
      "Carrier Dashboard"
    ],
    "paragraphs": [
      "Tell me everything about a carrier.  How many destinations?, flights? hubs?\nWhat kind of planes to they use? How many flights over time?  What are\nthe major hubs?  For each destination, How many flights? Where can you? Have they been\nflying there long?  Increasing or decreasing year by year?  Any seasonality?"
    ],
    "path": "/examples/faa.md"
  },
  {
    "titles": [
      "NTSB Flight Database examples",
      "Kayak Example Query"
    ],
    "paragraphs": [
      "Suppose you wanted to build a website like Kayak.  Let's assume that the data we have is\nin the future instead of the past.  The query below will fetch all the data needed\nto render a Kayak page in a singe query."
    ],
    "path": "/examples/faa.md"
  },
  {
    "titles": [
      "NTSB Flight Database examples",
      "Sessionizing Flight Data."
    ],
    "paragraphs": [
      "You can think of flight data as event data.  The below is a classic map/reduce roll up of the flight data by carrier and day, plane and day, and individual events for each plane."
    ],
    "path": "/examples/faa.md"
  },
  {
    "titles": [
      "NTSB Flight Database examples",
      "The Malloy Model"
    ],
    "paragraphs": [
      "All of the queries above are executed against the following model:"
    ],
    "path": "/examples/faa.md"
  },
  {
    "titles": [
      "NTSB Flight Database examples",
      "Data Styles"
    ],
    "paragraphs": [
      "The data styles tell the Malloy renderer how to render different kinds of results.",
      "<em>The follow examples all run against the model at the bottom of this page OR you can find the source code <a href=\"https://github.com/looker-open-source/malloy/blob/docs-release/samples/faa/flights.malloy\">here</a>.</em>"
    ],
    "path": "/examples/faa.md"
  },
  {
    "titles": [
      "Google Analytics"
    ],
    "paragraphs": [
      "Start by defining an explore based on a query.",
      "We can then add a few named queries to the model to easily access or reference elsewhere."
    ],
    "path": "/examples/ga_sessions.md"
  },
  {
    "titles": [
      "Google Analytics",
      "Putting it all together"
    ],
    "paragraphs": [
      "<em>You can find the complete source code for this model <a href=\"https://github.com/looker-open-source/malloy/blob/docs-release/samples/ga_sessions/ga_sessions.malloy\">here</a>.</em>"
    ],
    "path": "/examples/ga_sessions.md"
  },
  {
    "titles": [
      "Step 1: Understanding the Iowa Liquor Market Using Malloy"
    ],
    "paragraphs": [
      "Liquor sales in Iowa are state-controlled, with all liquor wholesale run by the state. All purchases and sales of liquor that stores make are a matter of public record. We are going to explore this data set to better understand the Iowa Liquor market.",
      "All data here is stored in BigQuery, in the table <code class=\"language-malloy\"><span class=\"token string\">'bigquery-public-data.iowa_liquor_sales.sales'</span></code>."
    ],
    "path": "/examples/iowa/iowa.md"
  },
  {
    "titles": [
      "Step 1: Understanding the Iowa Liquor Market Using Malloy",
      "A quick overview of the dataset:"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/iowa.md"
  },
  {
    "titles": [
      "Step 1: Understanding the Iowa Liquor Market Using Malloy",
      "Using a Malloy Query to Examine the Contents of the Table"
    ],
    "paragraphs": [
      "The table below shows all columns in the data set and their most common or ranges of values. The Malloy query below (or a derivation of it) can be used to examine just about any dataset."
    ],
    "path": "/examples/iowa/iowa.md"
  },
  {
    "titles": [
      "Step 1: Understanding the Iowa Liquor Market Using Malloy",
      "First 100 Rows of the data set."
    ],
    "paragraphs": [
      "<strong>Date/Time information</strong> (<code class=\"language-malloy\"><span class=\"token identifier\">`date`</span></code>)",
      "<strong>Store and Location</strong> (<code class=\"language-malloy\">store_name</code>, <code class=\"language-malloy\">store_address</code>, <code class=\"language-malloy\">store_location</code>, <code class=\"language-malloy\">city</code>, <code class=\"language-malloy\">county</code>, and <code class=\"language-malloy\">zip_code</code>)",
      "<strong>Vendor information</strong> (<code class=\"language-malloy\">vendor_name</code>, <code class=\"language-malloy\">vendor_number</code>)",
      "<strong>Item information</strong> (<code class=\"language-malloy\">item_number</code>, <code class=\"language-malloy\">item_description</code>, <code class=\"language-malloy\">category</code>, <code class=\"language-malloy\">category_name</code>)",
      "<strong>Volume Information</strong> (<code class=\"language-malloy\">bottle_volume_ml</code>, <code class=\"language-malloy\">bottles_sold</code>, <code class=\"language-malloy\">volume_sold_liters</code>, <code class=\"language-malloy\">volume_sold_gallons</code>)",
      "<strong>Pricing information</strong> (<code class=\"language-malloy\">state_bottle_cost</code>, <code class=\"language-malloy\">state_bottle_retail</code>, and <code class=\"language-malloy\">sale_dollars</code>)",
      "<em>The <a href=\"source.html\">Malloy data model</a> can be reviewed in examples under <a href=\"https://github.com/looker-open-source/malloy/blob/docs-release/samples/iowa/iowa.malloy\">'iowa'</a>.</em>"
    ],
    "path": "/examples/iowa/iowa.md"
  },
  {
    "titles": [
      "Iowa Liquor Malloy Model"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/source.md"
  },
  {
    "titles": [
      "Iowa Liquor Malloy Model",
      "Schema Overview"
    ],
    "paragraphs": [
      "This is the malloy model used for the Analysis example.  It should be used as an reference when looking at the <a href=\"step2.html\">following sections</a>.",
      "The schema for the table <code class=\"language-malloy\">bigquery<span class=\"token operator\">-</span>public<span class=\"token operator\">-</span>data<span class=\"token punctuation\">.</span>iowa_liquor_sales<span class=\"token punctuation\">.</span>sales</code> as well as descriptions of each field can be found on the <a href=\"https://data.iowa.gov/Sales-Distribution/Iowa-Liquor-Sales/m3tr-qhgy\">Iowa Data site</a>."
    ],
    "path": "/examples/iowa/source.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations"
    ],
    "paragraphs": [
      "The calculation <code class=\"language-malloy\">total_sale_dollars</code> will show us the total amount, in dollars, that Iowa State stores sold.",
      "Having added this to the model, we can now reference <code class=\"language-malloy\">total_sale_dollars</code> to see the top items purchased by Liquor stores.",
      "This lets us understand whether a vendor sells one item, or many different kinds of items.",
      "We can see which Vendors have the greatest breadth of products as it relates to sales volume.",
      "A few observations here: Jim Bean Brands has the greatest variety of items in this dataset. Yahara Bay Distillers Inc sells 275 different items but only has $100K in sales, while Fifth Generation sells only 5 different items, yet has $3M in volume.",
      "We have both the bottle cost (<code class=\"language-malloy\">state_bottle_cost</code>) and bottle price (<code class=\"language-malloy\">state_bottle_retail</code>), allowing us to calculate percent gross margin on a per-item basis, giving us a new a dimension.",
      "This is basically what a single record represents in this data set.",
      "Given the price of a bottle and its size (in ml), we can compute how much 100ml costs.  This becomes an attribute of an individual line item (a dimension, not a measure).",
      "Using our newly defined <code class=\"language-malloy\">price_per_100ml</code> as an attribute of a line item in a purchase order, we might like an average that we can use over a group of line items.  This is a simple example using line_items as the denominator, but an argument could be made to use per bottle something more complex.",
      "<strong>TLDR</strong>: In this section, we will flesh out our model with a few basic calculations: <code class=\"language-malloy\">total_sale_dollars</code>, <code class=\"language-malloy\">item_count</code>, <code class=\"language-malloy\">line_item_count</code>, <code class=\"language-malloy\">price_per_100ml</code> and <code class=\"language-malloy\">avg_price_per_100ml</code>.  These calculations will be use in  subsequent analysis."
    ],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations",
      "<em>total_sale_dollars</em> - What was the total volume of transactions?"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations",
      "<em>item_count</em> - How many different kinds of items were sold?"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations",
      "<em>gross_margin</em> - How much did the state of Iowa make on this item?"
    ],
    "paragraphs": [
      "Looking at gross margin across top selling items, we see that the gross margin is a <em>consistent 33.3 percent</em>.  A quick google search reveals that Iowa state law dictates the state can mark up liquor by up to 50% of the price from the vendor, so this makes sense!"
    ],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations",
      "<em>total_bottles</em> - How many individual bottles were sold?"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations",
      "<em>line_item_count</em> - How many line items were on the purchase orders?"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations",
      "<em>price_per_100ml</em> - How expensive is this booze?"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "Iowa Liquor: Basic Calculations",
      "<em>avg_price_per_100ml</em> - How expensive is this class of booze?"
    ],
    "paragraphs": [
      "<em>See the complete <a href=\"source.html\">Iowa Liquor Malloy Model</a></em>"
    ],
    "path": "/examples/iowa/step2.md"
  },
  {
    "titles": [
      "First Analysis, What are the top Brands and Price Points?"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2a.md"
  },
  {
    "titles": [
      "Definitions"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2a.md"
  },
  {
    "titles": [
      "Most popular vodka by dollars spent"
    ],
    "paragraphs": [],
    "path": "/examples/iowa/step2a.md"
  },
  {
    "titles": [
      "Adding a Query to the model."
    ],
    "paragraphs": [
      "This particular view of the data is pretty useful, an something we expect to re-use.  We can add this query to the model by incorporating it into the explore definition:"
    ],
    "path": "/examples/iowa/step2a.md"
  },
  {
    "titles": [
      "Examining Tequila"
    ],
    "paragraphs": [
      "Once the query is in the model we can simply call it by name, adjusting our filtering to ask questions about Tequila instead:"
    ],
    "path": "/examples/iowa/step2a.md"
  },
  {
    "titles": [
      "Nested Subtables: A deeper look at a Vendor offerings"
    ],
    "paragraphs": [
      "These nested subtables allow us to view both the high-level information of \"who are our top vendors\" as well as the supporting detail in one simple Malloy query."
    ],
    "path": "/examples/iowa/step2a.md"
  },
  {
    "titles": [
      "Bucketing the data"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\">price_per_100ml</code> calculation, defined in the previous section, combines with our new named query to allow for some interesting analysis. Let's take a look at the entire Tequila category, and see the leaders within each price range.  We'll bucket <code class=\"language-malloy\">price_per_100ml</code> into even dollar amounts, and nest our <code class=\"language-malloy\">top_sellers_by_revenue</code> query to create a subtable for each bucket.",
      "At the top we see our lowest cost options at under $1/mL, with the more pricey beverages appearing as we scroll down.",
      "<strong>TLDR;</strong> We'll use the measures we defined in the last section to write some basic queries to understand the Vodka market, and answer a few questions:  <em>What are the most popular brands?  Which is the most expensive?  Does a particular county favor expensive or cheap Vodka?</em>  We will then learn how to save a named query and use it as a basic <strong>Nested Query</strong>.",
      "The following sections use these definitions, created in the <a href=\"step2.html\">previous\nsection</a>.",
      "We start by  <a href=\"../../language/filters.html\">filtering the data</a> to only purchase records where the category name contains <code class=\"language-malloy\"><span class=\"token string\">'VODKA'</span></code>.  We group the data by vendor and description, and calculate the various totals. Note that Malloy <a href=\"../../patterns/order_by.html\">automatically orders</a> the results by the first measure descending (in this case).",
      "Notice that the greatest sales by dollar volume is <em>Hawkeye Vodka</em>, closely followed by <em>Absolut</em>.  A lot more bottles of <em>Hawkeye</em> were sold, as it is 1/3 the price by volume of <em>Absolut</em>.",
      "Here we can see that <em>Patron Tequila Silver</em> is the most premium brand, followed by <em>Jose Cuervo</em> as a mid-tier  brand, with <em>Juarez Tequila Gold</em> more of an economy brand.",
      "The magic happens when we call a named query in the same way we would use any other field <a href=\"nesting.html\">nesting</a>. In the below query, we can see our vendors (sorted automatically by amount purchased, as well as the top 5 items for each vendor."
    ],
    "path": "/examples/iowa/step2a.md"
  },
  {
    "titles": [
      "Bucketing and Mapping: Categories and Bottles"
    ],
    "paragraphs": [
      "Our previous analysis of price per mL brings to mind questions around bottle size. How many different sizes do bottles come in?  Are there standards and uncommon ones?  Do vendors specialize in different bottle sizes?"
    ],
    "path": "/examples/iowa/step3.md"
  },
  {
    "titles": [
      "Bucketing and Mapping: Categories and Bottles",
      "Testing the category map"
    ],
    "paragraphs": [
      "Let's take a look at each category class and see how many individual items it has.  We'll also build a nested query that shows the <code class=\"language-malloy\">category_name</code>s that map into that category class."
    ],
    "path": "/examples/iowa/step3.md"
  },
  {
    "titles": [
      "Bucketing and Mapping: Categories and Bottles",
      "Looking at the entire market by <code class=\"language-malloy\">category_class</code>"
    ],
    "paragraphs": [
      "With our new lens, we can now see the top sellers in each <code class=\"language-malloy\">category_class</code>, allowing us to get an entire market summary with a single simple query."
    ],
    "path": "/examples/iowa/step3.md"
  },
  {
    "titles": [
      "Bucketing and Mapping: Categories and Bottles",
      "Understanding bottle sizes"
    ],
    "paragraphs": [
      "In this data set, there is a column called <code class=\"language-malloy\">bottle_volume_ml</code>, which is the bottle size in mL. Let's take a look.",
      "A first query reveals that there are 34 distinct bottle sizes in this data set, and that 750ml, 1750ml and 1000ml are by far the most common.",
      "Visualizing this query suggests that we might wish to create 3 distinct buckets to approximate small, medium and large bottles."
    ],
    "path": "/examples/iowa/step3.md"
  },
  {
    "titles": [
      "Bucketing and Mapping: Categories and Bottles",
      "Creating a new Dimension for Bottle Size."
    ],
    "paragraphs": [
      "Looking at the above chart and table we can see that there are a bunch of small values, several big values at 750 and 1000, and then a bunch of larger values.  We can clean this up by bucketing bottle size into three groups using a Malloy <code class=\"language-malloy\"><span class=\"token keyword\">pick</span></code> expression that maps these values to strings.",
      "Look at the data through the new mapping."
    ],
    "path": "/examples/iowa/step3.md"
  },
  {
    "titles": [
      "Bucketing and Mapping: Categories and Bottles",
      "Building <em>category_class</em>, a simplified version of <em>category_name</em>"
    ],
    "paragraphs": [
      "Using the query below, we can see that there are 68 different category names in the data set.  We can notice there is <em>80 Proof Vodka</em>, <em>Flavored Vodka</em> and more.  It would be helpful if we just could have all of these categorized together as vodkas.",
      "Malloy provides a simple way to map all these values, using <code class=\"language-malloy\"><span class=\"token keyword\">pick</span></code> expressions.  In the <a href=\"source.html\">Malloy Model for this Data Set</a>, you will find the declaration below.  Each pick expression tests <code class=\"language-malloy\">category_name</code> for a regular expression.  If it matches, it returns the name pick'ed.",
      "<strong>TLDR:</strong> <em>This step builds a couple of useful derivations, <code class=\"language-malloy\">category_class</code> and <code class=\"language-malloy\">bottle_size</code>.  There as 68 different <code class=\"language-malloy\">category_name</code>s in this data set, we reduce that to 9.  There are 34 <em>liter sizes</em>, we make a new dimension, <code class=\"language-malloy\">bottle_size</code> that only has 3 possible values.</em>"
    ],
    "path": "/examples/iowa/step3.md"
  },
  {
    "titles": [
      "Dashboards"
    ],
    "paragraphs": [
      "Putting it all together we can write a dashboard"
    ],
    "path": "/examples/iowa/step6.md"
  },
  {
    "titles": [
      "Dashboards",
      "Run Dashboard"
    ],
    "paragraphs": [
      "Simply add some filters.  Notice the sub-dashboard for each of the Vendors."
    ],
    "path": "/examples/iowa/step6.md"
  },
  {
    "titles": [
      "Name Game"
    ],
    "paragraphs": [
      "The Data set consists of name, gender, state and year with the number of people that\nwere born with that name in that gender, state and year."
    ],
    "path": "/examples/names.md"
  },
  {
    "titles": [
      "Name Game",
      "Grouping a query"
    ],
    "paragraphs": [
      "In SQL there are basically two kinds of <code>SELECT</code> commands: <code>SELECT ... GROUP BY</code> and <code>SELECT</code> without a grouping.\nIn malloy, these are two different commands.  The command in malloy for <code>SELECT ... GROUP BY</code> is <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span></code>.  Since <code class=\"language-malloy\"><span class=\"token type\">number</span></code>\nand <code class=\"language-malloy\"><span class=\"token timeframe\">year</span></code> are reserved words, we have to quote the names with back-tics.",
      "malloy compiles to SQL.  The SQL query for the above command is."
    ],
    "path": "/examples/names.md"
  },
  {
    "titles": [
      "Name Game",
      "Expressions"
    ],
    "paragraphs": [
      "Expressions work much the same as they do in SQL.  We can look at population over decade by using a calculation against the year."
    ],
    "path": "/examples/names.md"
  },
  {
    "titles": [
      "Name Game",
      "Cohorts"
    ],
    "paragraphs": [],
    "path": "/examples/names.md"
  },
  {
    "titles": [
      "Name Game",
      "Dashboard"
    ],
    "paragraphs": [],
    "path": "/examples/names.md"
  },
  {
    "titles": [
      "Name Game",
      "Iconic Names by State and Gender"
    ],
    "paragraphs": [
      "Calculate the births per 100K for a name in general and a name within a state. Compute and sort by a ratio to figure out relative popularity.",
      "The command above says query the table <code class=\"language-malloy\"><span class=\"token string\">'bigquery-public-data.usa_names.usa_1910_2013'</span></code> and <em>project</em> (show)\nall the columns for the first 10 rows.",
      "<em>You can find the complete source code for this model <a href=\"https://github.com/looker-open-source/malloy/blob/docs-release/samples/names/names.malloy\">here</a>.</em>"
    ],
    "path": "/examples/names.md"
  },
  {
    "titles": [
      "A Perfect Solver for Wordle using Data"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle.md"
  },
  {
    "titles": [
      "A Perfect Solver for Wordle using Data",
      "Step 1 - Raw Materials"
    ],
    "paragraphs": [
      "The first thing we need is a word list.  It turns out that on most unix systems there is a word list that can be\nfound at <code class=\"language-malloy\"><span class=\"token operator\">/</span>usr<span class=\"token operator\">/</span>share<span class=\"token operator\">/</span>dict<span class=\"token operator\">/</span>words</code>.  The file has a single word per line, so we've just uploaded the entire files (as a CSV)\ninto BigQuery.",
      "We are only interested in 5 letter words so create a query for that and\nlimit the results to 5 letter words.",
      "Notice that there are a bunch of proper names?  Let's look for only lowercase words as input\nand Uppercase words in the output of our query.",
      "and the query:"
    ],
    "path": "/examples/wordle/wordle.md"
  },
  {
    "titles": [
      "A Perfect Solver for Wordle using Data",
      "Searching for Words"
    ],
    "paragraphs": [
      "Regular expressions are great for matching words.  We are going to use a few patterns."
    ],
    "path": "/examples/wordle/wordle.md"
  },
  {
    "titles": [
      "A Perfect Solver for Wordle using Data",
      "Searching for Words",
      "This letter exists somewhere in the word"
    ],
    "paragraphs": [
      "Find words that contain X AND Y."
    ],
    "path": "/examples/wordle/wordle.md"
  },
  {
    "titles": [
      "A Perfect Solver for Wordle using Data",
      "Searching for Words",
      "Letter position: This letter here, that letter NOT there"
    ],
    "paragraphs": [
      "Find words that have M in the 4th position and the 5th position is NOT E or Z"
    ],
    "path": "/examples/wordle/wordle.md"
  },
  {
    "titles": [
      "A Perfect Solver for Wordle using Data",
      "Searching for Words",
      "Ruling letters out"
    ],
    "paragraphs": [
      "Find words that do NOT contain S,L,O,P, or E",
      "<a href=\"https://www.powerlanguage.co.uk/wordle/\">Wordle</a> is an interesting, challenging and fun word game.  If you aren't familiar with it, I suggest that you play it before reading this article"
    ],
    "path": "/examples/wordle/wordle.md"
  },
  {
    "titles": [
      "Letters and Positioning."
    ],
    "paragraphs": [
      "The query below produces a table with the numbers 1 to 5"
    ],
    "path": "/examples/wordle/wordle1a.md"
  },
  {
    "titles": [
      "Letters and Positioning.",
      "Cross join these two tables to produce letter positioning."
    ],
    "paragraphs": [
      "The result is a table with nested data.  Each word contains a sub-table with a letter in each position."
    ],
    "path": "/examples/wordle/wordle1a.md"
  },
  {
    "titles": [
      "Understanding Letter Frequency"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle2.md"
  },
  {
    "titles": [
      "Understanding Letter Frequency",
      "Create a new explore <code class=\"language-malloy\">wordle</code> to query the data in this form."
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle2.md"
  },
  {
    "titles": [
      "Understanding Letter Frequency",
      "How many 5 letter words are there?"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle2.md"
  },
  {
    "titles": [
      "Understanding Letter Frequency",
      "What are the most common letters if 5 letter words?"
    ],
    "paragraphs": [
      "We can count both the number of words that contain the letter and the number of uses.  Many words have the same\nletter more than once."
    ],
    "path": "/examples/wordle/wordle2.md"
  },
  {
    "titles": [
      "Understanding Letter Frequency",
      "Common Letters and Positions"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle2.md"
  },
  {
    "titles": [
      "Understanding Letter Frequency",
      "Removing Plurals and words that end in 'ED'"
    ],
    "paragraphs": [
      "We've noticed there are a lots of words that end in 'S' or 'ED' in the dataset, but in our experience they don't often appear in puzzles.  We've eliminated them from our model for now, by filtering them out on the explore level:"
    ],
    "path": "/examples/wordle/wordle2.md"
  },
  {
    "titles": [
      "Understanding Letter Frequency",
      "Now how many 5 letter words are there?"
    ],
    "paragraphs": [
      "Starting with the <a href=\"wordle1a.html\">query we built in step one</a>, we built a query that produces a table of words with subtable where\neach row is the letter and position in that row."
    ],
    "path": "/examples/wordle/wordle2.md"
  },
  {
    "titles": [
      "Puzzle #214"
    ],
    "paragraphs": [
      "Query for best Starting words.",
      "Start with a word without duplicates to get coverage.  Today we choose 'SLATE'",
      "Query for words that Contain 'T', don't have 'T' in the 4th spot and don't have the Letters 'SLAE'. Rank them by the number\nof possible space matches.",
      "'TIGHT\" has two Ts so skip it. Next best word..  'TOUCH'",
      "Query for words that Contain 'T', don't have 'T' in the 1st and 4th spot.  Has O in the second spot.  and don't have the Letters 'SLAEUCH'."
    ],
    "path": "/examples/wordle/wordle214.md"
  },
  {
    "titles": [
      "Puzzle #214",
      "Solved in 4!"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle214.md"
  },
  {
    "titles": [
      "Puzzle #214",
      "Solved in 4!",
      "Code For Wordlebot:"
    ],
    "paragraphs": [
      "<em>January 19, 2022</em>",
      "<a href=\"wordle5.html\">↩️ All Solved Puzzles</a>   |   <a href=\"wordle215.html\">➡️ Next Puzzle</a>",
      "Wordlebot is written in <a href=\"https://github.com/looker-open-source/malloy/\">Malloy</a>. Read about <a href=\"wordle.html\">How Wordlebot is constructed</a> (only 50 lines of code) and a good example of using data to solve interesting problems.",
      "<a href=\"wordle5.html\">↩️ All Solved Puzzles</a>   |  <a href=\"wordle215.html\">➡️ Next Puzzle</a>"
    ],
    "path": "/examples/wordle/wordle214.md"
  },
  {
    "titles": [
      "Puzzle #215"
    ],
    "paragraphs": [
      "Query for best starting words."
    ],
    "path": "/examples/wordle/wordle215.md"
  },
  {
    "titles": [
      "Puzzle #215",
      "Start with 'SAUCE' today (why not?)"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle215.md"
  },
  {
    "titles": [
      "Puzzle #215",
      "Query for words that"
    ],
    "paragraphs": [
      "Don't have the letters 'SAUCE'"
    ],
    "path": "/examples/wordle/wordle215.md"
  },
  {
    "titles": [
      "Puzzle #215",
      "Best next word is 'BOOTY', trust double letters today."
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle215.md"
  },
  {
    "titles": [
      "Puzzle #215",
      "Query for words that"
    ],
    "paragraphs": [
      "Contain 'B' and 'O' and 'T'",
      "Don't have 'B' in the first spot and don't have 'O' in the third spot or 'T' in the forth spot.",
      "Have O in the second spot",
      "Don't have the Letters 'SAUCEY'."
    ],
    "path": "/examples/wordle/wordle215.md"
  },
  {
    "titles": [
      "Puzzle #215",
      "Solved in 3!"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle215.md"
  },
  {
    "titles": [
      "Puzzle #215",
      "Solved in 3!",
      "Code For Wordlbot:"
    ],
    "paragraphs": [
      "<em>January 20, 2022</em>",
      "<a href=\"wordle214.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle216.html\">➡️ Next Puzzle</a>",
      "Wordlebot is written in <a href=\"https://github.com/looker-open-source/malloy/\">Malloy</a>. Read about <a href=\"wordle.html\">How Wordlebot is constructed</a> (only 50 lines of code) and a good example of using data to solve interesting problems.",
      "<a href=\"wordle214.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle216.html\">➡️ Next Puzzle</a>"
    ],
    "path": "/examples/wordle/wordle215.md"
  },
  {
    "titles": [
      "Puzzle #216"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle216.md"
  },
  {
    "titles": [
      "Puzzle #216",
      "Query for the best starting words."
    ],
    "paragraphs": [
      "Start with a word without duplicates to get coverage. We'll run with 'SLATE' as our starter again today."
    ],
    "path": "/examples/wordle/wordle216.md"
  },
  {
    "titles": [
      "Puzzle #216",
      "The Second Guess"
    ],
    "paragraphs": [
      "Oof--no matches. Now what? We'll query for words that don't contain any of these characters, and rank them by the number of possible space matches.",
      "'CRONY' looks good, let's run with that."
    ],
    "path": "/examples/wordle/wordle216.md"
  },
  {
    "titles": [
      "Puzzle #216",
      "Round 3: Tie Breaking"
    ],
    "paragraphs": [
      "'CRONY' gave us one match and a yellow tile, so we'll query for words with 'R' in the second position, and that contain 'C', but not in the first position.",
      "Just two words left and at this point it's really a matter of luck--we can take a guess at what we think the creators used, but if we want Malloy to make all the decisions for us, as a somewhat nonsensical tiebreaker, why don't we see which letter appears more often in the dataset overall:",
      "'P' appears a little bit more often than 'B'; we'll go with that."
    ],
    "path": "/examples/wordle/wordle216.md"
  },
  {
    "titles": [
      "Puzzle #216",
      "Solved in 3.5?"
    ],
    "paragraphs": [
      "It doesn't really feel like we can give ourselves this one with equal scores on the two words and an arbitrary tiebreaker at the end, so let's call it 3.5 this time."
    ],
    "path": "/examples/wordle/wordle216.md"
  },
  {
    "titles": [
      "Puzzle #216",
      "Solved in 3.5?",
      "Code For Wordlbot:"
    ],
    "paragraphs": [
      "<em>January 21, 2022</em>",
      "<a href=\"wordle215.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle217.html\">➡️ Next Puzzle</a>",
      "Wordlebot is written in <a href=\"https://github.com/looker-open-source/malloy/\">Malloy</a>. Read about <a href=\"wordle.html\">How Wordlebot is constructed</a> (only 50 lines of code) and a good example of using data to solve interesting problems.",
      "<a href=\"wordle215.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle217.html\">➡️ Next Puzzle</a>"
    ],
    "path": "/examples/wordle/wordle216.md"
  },
  {
    "titles": [
      "Puzzle #217"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle217.md"
  },
  {
    "titles": [
      "Puzzle #217",
      "Query for the best starting words."
    ],
    "paragraphs": [
      "Skipping 'SAREE' to avoid duplicates this early in the game, let's go with 'SLATE' again."
    ],
    "path": "/examples/wordle/wordle217.md"
  },
  {
    "titles": [
      "Puzzle #217",
      "The Second Guess"
    ],
    "paragraphs": [
      "One green match--not a bad start. Let's find more words ending in E.",
      "The 'PRICE' is right, or something..."
    ],
    "path": "/examples/wordle/wordle217.md"
  },
  {
    "titles": [
      "Puzzle #217",
      "Round 3: Tie Breaking"
    ],
    "paragraphs": [
      "That worked nicely for us, we have two green matches and now we need to figure out where 'I' belong(s).",
      "Another tie, today with a chance to guess just how into cooking the Wordle creators are. We can use our same letter commonality tie-breaker here; maybe this time we'll look at letter commonality for first position.",
      "'M' appears to be a little more common as a first letter than 'W' so we went with that."
    ],
    "path": "/examples/wordle/wordle217.md"
  },
  {
    "titles": [
      "Puzzle #217",
      "Solved in 3.5 again"
    ],
    "paragraphs": [
      "There it is, and our solution also happens to describe our reaction after missing that coin-toss! We'll go ahead and call this one 3.5 again based on the last round."
    ],
    "path": "/examples/wordle/wordle217.md"
  },
  {
    "titles": [
      "Puzzle #217",
      "Solved in 3.5 again",
      "Code For Wordlbot:"
    ],
    "paragraphs": [
      "<em>January 22, 2022</em>",
      "<a href=\"wordle216.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle218.html\">➡️ Next Puzzle</a>",
      "Wordlebot is written in <a href=\"https://github.com/looker-open-source/malloy/\">Malloy</a>. Read about <a href=\"wordle.html\">How Wordlebot is constructed</a> (only 50 lines of code) and a good example of using data to solve interesting problems.",
      "<a href=\"wordle216.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle218.html\">➡️ Next Puzzle</a>"
    ],
    "path": "/examples/wordle/wordle217.md"
  },
  {
    "titles": [
      "Puzzle #218"
    ],
    "paragraphs": [
      "Today was a bit of a kerfuffle.  It turns out that the word list we were using was too small and missing the\nword we were searching for.  We found a larger dictionary and uploaded and re-ran."
    ],
    "path": "/examples/wordle/wordle218.md"
  },
  {
    "titles": [
      "Puzzle #218",
      "Query for the best starting words."
    ],
    "paragraphs": [
      "Skipping 'SAREE' and 'SOOTY' to avoid duplicates this early in the game, let's go with 'SAUCE' again."
    ],
    "path": "/examples/wordle/wordle218.md"
  },
  {
    "titles": [
      "Puzzle #218",
      "The Second Guess"
    ],
    "paragraphs": [
      "'C' as yellow in the 4th position.",
      "Wow, lots of double letter words, let's skip them this early in the game and pick 'CHOIR'"
    ],
    "path": "/examples/wordle/wordle218.md"
  },
  {
    "titles": [
      "Puzzle #218",
      "Bang!  There is is 'CRIMP' in 3 guesses"
    ],
    "paragraphs": [
      "In three."
    ],
    "path": "/examples/wordle/wordle218.md"
  },
  {
    "titles": [
      "Puzzle #218",
      "Bang!  There is is 'CRIMP' in 3 guesses",
      "Code For Wordlbot:"
    ],
    "paragraphs": [
      "<em>January 23, 2022</em>",
      "<a href=\"wordle217.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle219.html\">➡️ Next Puzzle</a>",
      "Wordlebot is written in <a href=\"https://github.com/looker-open-source/malloy/\">Malloy</a>. Read about <a href=\"wordle.html\">How Wordlebot is constructed</a> (only 50 lines of code) and a good example of using data to solve interesting problems.",
      "<a href=\"wordle217.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>  |  <a href=\"wordle219.html\">➡️ Next Puzzle</a>"
    ],
    "path": "/examples/wordle/wordle218.md"
  },
  {
    "titles": [
      "Puzzle #219"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle219.md"
  },
  {
    "titles": [
      "Puzzle #219",
      "Query for the best starting words"
    ],
    "paragraphs": [
      "We'll open up with 'SAUCE' again today (skipping those double-letter words this early on)."
    ],
    "path": "/examples/wordle/wordle219.md"
  },
  {
    "titles": [
      "Puzzle #219",
      "The Second Guess"
    ],
    "paragraphs": [
      "Nothing on 'SAUCE'--let's look for our top scoring words excluding these characters.",
      "Still feels a bit early for double letters, so we're running with 'DOILY'"
    ],
    "path": "/examples/wordle/wordle219.md"
  },
  {
    "titles": [
      "Puzzle #219",
      "Round 3/4: More Creative Tie-breaking"
    ],
    "paragraphs": [
      "With one green and one yellow match we're down to two possible words.",
      "Today, why don't we see whether 'KN' or 'TR' appear more commonly as starts for words in our dataset.",
      "Our luck on these tie-breakers really hasn't been so great, but all in all another 3.5 day isn't half bad!"
    ],
    "path": "/examples/wordle/wordle219.md"
  },
  {
    "titles": [
      "Puzzle #219",
      "Round 3/4: More Creative Tie-breaking",
      "Code For Wordlbot:"
    ],
    "paragraphs": [
      "<em>January 24, 2022</em>",
      "<a href=\"wordle218.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>",
      "Wordlebot is written in <a href=\"https://github.com/looker-open-source/malloy/\">Malloy</a>. Read about <a href=\"wordle.html\">How Wordlebot is constructed</a> (only 50 lines of code) and a good example of using data to solve interesting problems.",
      "<a href=\"wordle218.html\">⬅️ Previous Puzzle</a>   |   <a href=\"wordle5.html\">↩️ All Solved Puzzles</a>"
    ],
    "path": "/examples/wordle/wordle219.md"
  },
  {
    "titles": [
      "Letters and Positions"
    ],
    "paragraphs": [
      "This query finds the most common letter-position matches."
    ],
    "path": "/examples/wordle/wordle3.md"
  },
  {
    "titles": [
      "Letters and Positions",
      "Adding a wordlist"
    ],
    "paragraphs": [
      "We can see that 'E' in position 5 occurs in 498 words, 'S' in position 1  occurs in 441 words.  Words ending in 'Y' are surprisingly common."
    ],
    "path": "/examples/wordle/wordle3.md"
  },
  {
    "titles": [
      "Letters and Positions",
      "Add this to our Model"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle3.md"
  },
  {
    "titles": [
      "Letters and Positions",
      "How many words with have an 'O' in the second position have a 'Y' and don't have 'SLA'"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle3.md"
  },
  {
    "titles": [
      "Letters and Positions",
      "How to pick the next word?"
    ],
    "paragraphs": [
      "We'd like to pick a word that is going to lead to the most will reveal the most about the most words.\nWe can produce a word score by taking our find word query and mapping back to words."
    ],
    "path": "/examples/wordle/wordle3.md"
  },
  {
    "titles": [
      "Letters and Positions",
      "This looks pretty useful, lets make <code class=\"language-malloy\">find_words</code> return a score."
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle3.md"
  },
  {
    "titles": [
      "Letters and Positions",
      "How many words with have an 'O' in the second position have a 'Y' and don't have 'SLA'"
    ],
    "paragraphs": [
      "The score should give us then best pick."
    ],
    "path": "/examples/wordle/wordle3.md"
  },
  {
    "titles": [
      "Final Model"
    ],
    "paragraphs": [
      "Final Data Model - Goto <a href=\"wordle5.html\">Solve Puzzles</a>"
    ],
    "path": "/examples/wordle/wordle4.md"
  },
  {
    "titles": [
      "Solved Puzzles"
    ],
    "paragraphs": [
      "Let's solve some puzzles!",
      "<em>Wordlebot is writen in <a href=\"https://github.com/looker-open-source/malloy/\">Malloy</a>. Read about <a href=\"wordle.html\">How Wordlebot is constructed</a> (only 50 lines of code) and a good example of using data to solve interesting problems.</em>",
      "<strong><a href=\"wordle214.html\">Wordle 214</a></strong>: <em>Jan 19</em> - Solved in 4",
      "<strong><a href=\"wordle215.html\">Wordle 215</a></strong>: <em>Jan 20</em> - Solved in 3",
      "<strong><a href=\"wordle216.html\">Wordle 216</a></strong>: <em>Jan 21</em> - Solved in 3.5",
      "<strong><a href=\"wordle217.html\">Wordle 217</a></strong>: <em>Jan 22</em> - Solved in 3.5",
      "<strong><a href=\"wordle218.html\">Wordle 218</a></strong>: <em>Jan 23</em> - Solved in 3",
      "<strong><a href=\"wordle219.html\">Wordle 219</a></strong>: <em>Jan 24</em> - Solved in 3.5"
    ],
    "path": "/examples/wordle/wordle5.md"
  },
  {
    "titles": [
      "Code For Wordlebot:"
    ],
    "paragraphs": [],
    "path": "/examples/wordle/wordle_model.md"
  },
  {
    "titles": [
      "Malloy's Features"
    ],
    "paragraphs": [],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Reusable Analytical Data Model"
    ],
    "paragraphs": [
      "Common calculations, table relationships and reusable queries can all be encoded in a Malloy\nData Model.  Malloy queries (equivalent of SQL's <code>SELECT</code>) run against the data model and\nproduce SQL."
    ],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Filtering Data"
    ],
    "paragraphs": [],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Reusable Aggregates"
    ],
    "paragraphs": [
      "In a Malloy Data Model, an aggregate computation need only be defined once (for example revenue).  Once defined, it can be used\nin any query at any level of granularity or dimensionality. Malloy retains enough information in the data graph\nto perform this calculation no matter how you ask for it. Reusable Aggregates help improve accuracy."
    ],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Reusable Dimensional calculations"
    ],
    "paragraphs": [
      "Dimensional (Scalar calculations) can also be introduced into the model. Dimensional calculation are useful\nmapping values, bucketing results and data cleanup."
    ],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Maintains Relationships"
    ],
    "paragraphs": [
      "SQL's <code>SELECT</code> statement flattens the namespace into a wide table. Malloy retains the graph relationship\nof data lets you access and correctly perform computations and any place in the graph."
    ],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Reusable Queries"
    ],
    "paragraphs": [],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Aggregating Subqueries"
    ],
    "paragraphs": [
      "Malloy easily produces nested results.  Entire dashboards can be fetched in a single query.\nNamed queries of a given shape can easily be nested, visualized and reused."
    ],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Pipelines"
    ],
    "paragraphs": [
      "Malloy can pipeline operations.  The output of one query can be the input for next."
    ],
    "path": "/features.md"
  },
  {
    "titles": [
      "Malloy's Features",
      "Metadata, Visualization and Drilling"
    ],
    "paragraphs": [
      "Compiling a Malloy query returns metadata about the structure of the results. When combined with the query results, Malloy's rendering library can give a very\nrich user experience, rendering dashboards, visualizations.  Through this metadata\nthe visualization library can rewrite queries to drill through to data detail.",
      "The first step in working with data, often is isolating the data you are interested in.\nMalloy introduces <a href=\"language/filters.html\">simplified filtering</a> for all types and allows these filters to be\napplied.  <a href=\"language/time-ranges.html\">Time calculations</a> are powerful and understandable.",
      "Queries can be introduced into a Malloy model and accessed by name.  One benefit is that the\nqueries are always accurate.  Think of a Malloy model as a data function library.\nQueries can also be used to create <a href=\"nesting.html\">nested subtables</a> in other queries."
    ],
    "path": "/features.md"
  },
  {
    "titles": [
      "The Tao of Malloy"
    ],
    "paragraphs": [],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "Malloy …"
    ],
    "paragraphs": [],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… feels familiar to someone coming from SQL"
    ],
    "paragraphs": [
      "Our primary users will all be familiar with SQL. We should make their life no harder than it needs to be. That said, Malloy is actually describing a different type of operation than SQL does, and so in some places we are deliberately different from SQL because we want people to be unfamiliar, to learn how Malloy works.",
      "For example <code class=\"language-malloy\">name <span class=\"token keyword\">is</span> expression</code>, vs <code class=\"language-malloy\">expression <span class=\"token keyword\">as</span> name</code>. In SQL the naming on an expression sits as a casual afterthought \"oh by the way, give this really important expression a name\". In Malloy, the name of a thing is important, you are building complex things from smaller pieces. When you look at a model, you will often want to scan the file looking for names, they belong on the left hand side.",
      "However, we in general try to have the \"feel\" of SQL. We use <code class=\"language-malloy\"><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code> for structuring instead of <code class=\"language-malloy\">{}</code> like LookML or JavaScript do, or indentation like Python does. We use <code class=\"language-malloy\"><span class=\"token keyword\">is</span></code> and <code class=\"language-malloy\"><span class=\"token keyword\">define</span></code> instead of <code class=\"language-malloy\">:</code> like LookML or <code class=\"language-malloy\"><span class=\"token operator\">=</span></code> like JavaScript. We use SQL words for things (like <code class=\"language-malloy\">join</code>) where it makes sense.",
      "The intention was always that there is some context, command line or editor, which handles a single document with mixed Malloy and SQL, either because they are one merged language, or there is some JSX-like escaping between the contexts."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… feels concise, but not cryptic"
    ],
    "paragraphs": [
      "This is the most common point of disagreement as we talk about how to express things. There is no one right answer to this. We have a preference for brevity, every single feature we wrestle with trying to get the most clarity from the least language surface."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… is composable"
    ],
    "paragraphs": [
      "If you find a piece of code that works, you should be able to select it, paste it somewhere with a name, and use it by name."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… is an algebra for computations with relational data"
    ],
    "paragraphs": [
      "Malloy comprehends data as a network of relationships and so computations like aggregation have a useful and mathematical meaning. Malloy gestures should read like a mathematical formula which means one clear thing."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… is NOT an attempt to make the language look like English sentences"
    ],
    "paragraphs": [
      "Maybe AppleScript or COBOL would be at the extreme end of this. More of a kind of math, less like a natural language."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… is curated"
    ],
    "paragraphs": [
      "There are not four different ways to express things depending on which programming language or style you came from. There is one, and it is carefully chosen to match the task of data transformation, discovery and presentation."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… is helpful"
    ],
    "paragraphs": [
      "Malloy tries to \"do the right thing\" that most people want, by default, while still allowing non default expressions to be written. The treatment of <code class=\"language-malloy\"><span class=\"token keyword\">null</span></code> and booleans, and the sorting rules for \"reduce\" stages would be two examples of this."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… is still an experiment"
    ],
    "paragraphs": [
      "We had some theoretical insights that there was a better way to interact with data than SQL, and Malloy is the current snapshot of that thinking, but we are not done. We have a number of features which are not yet in the language, which we expect to have an impact on the language, and maybe even on these rules. The language is still young and needs room to grow."
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Tao of Malloy",
      "… is an expression of empathy towards explorers and explainers of data"
    ],
    "paragraphs": [
      "The Malloy user is not someone who writes one sentence in Malloy, and then never sees the language again. Malloy is an invitation into a \"way\" for people who are passionate about decision making based on data, and good decision making is iterative, and ongoing.",
      "<em>Tao is the natural order of the universe whose character one's human intuition must discern in order to realize the potential for individual wisdom. This intuitive knowing of \"life\" cannot be grasped as a concept; it is known through actual living experience of one's everyday being.</em> — <a href=\"https://en.wikipedia.org/wiki/Tao\">Wikipedia \"Tao\"</a>"
    ],
    "path": "/index.md"
  },
  {
    "titles": [
      "The Story of Malloy"
    ],
    "paragraphs": [
      "Malloy was designed by a team of people with a lot of experience in\nunderstanding the task of extracting meaning from data. Years of constant\nexposure to SQL resulted in a tremendous sense of wonder at the\npower of SQL ... and a tremendous source of frustration at how\nbad SQL is at representing the types of operations needed to\nget meaningful data out of relational databases, and how\ndifficult it is to maintain and extend a complex set\nof transformations written in SQL.",
      "Malloy started as a \"clean slate\" thought experiment, if we knew\nall the things we know about data, and about programming with data,\nand about programming languages in general, and we were designing\na query language today, what would it look like.",
      "In it's earliest form, Malloy looked a lot like SQL, and\nmuch of Malloy continues to be influenced by the overall\ndesign of the SQL language. It was always the intention that there\ncould be a document that would contain both Malloy and SQL\nand those would make sense together, perhaps parallel to\nthe way Javascript and Typescript work together."
    ],
    "path": "/language/about-malloy.md"
  },
  {
    "titles": [
      "Aggregates"
    ],
    "paragraphs": [],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Basic Syntax"
    ],
    "paragraphs": [],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Basic Syntax",
      "Counts"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\">count</code> aggregate function may be used to count the number of records appearing in an explore."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Basic Syntax",
      "Distinct Counts"
    ],
    "paragraphs": [
      "Distinct counts may be used to count the number of distinct values of a particular field within an explore."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Basic Syntax",
      "Sums"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\">sum</code> function may be used to compute the sum of all records of a particular field."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Basic Syntax",
      "Averages"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\">avg</code> function may be used to compute the average of all records of a particular field."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Basic Syntax",
      "Minima"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\">min</code> function may be used to compute the minimum of all records of a particular field."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Basic Syntax",
      "Maxima"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\">max</code> function may be used to compute the maximum of all records of a particular field."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Aggregate Locality"
    ],
    "paragraphs": [
      "In SQL, some kinds of aggregations are difficult to express because locality of aggregation is restricted to the top level of a query. Malloy\noffers more control over this behavior, allowing these types of analysis to be\nexpressed much more easily."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Aggregate Locality",
      "The Problem"
    ],
    "paragraphs": [
      "Suppose you were interested in learning more about the number of seats on\ncommercial aircraft. First you might look at the average number of seats\non all registered aircraft.",
      "To do this, you would start with the <code class=\"language-malloy\">aircraft</code> table and join in <code class=\"language-malloy\">aircraft_models</code> to get access to the number of seats, then take\nthe average of <code class=\"language-malloy\">aircraft_models<span class=\"token punctuation\">.</span>seats</code>.",
      "You're also interested in knowing the average number of seats on the kinds of aircraft that are in use, or in other words, the average number of seats of the aircraft models of registered aircraft.",
      "To do this, you might decide to start with the <code class=\"language-malloy\">aircraft_models</code> table instead."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Aggregate Locality",
      "The Solution"
    ],
    "paragraphs": [
      "For convenience, <code class=\"language-malloy\">aircraft_models<span class=\"token punctuation\">.</span><span class=\"token function\">avg</span><span class=\"token punctuation\">(</span>aircraft_models<span class=\"token punctuation\">.</span>seats<span class=\"token punctuation\">)</span></code> can be written as <code class=\"language-malloy\">aircraft_models<span class=\"token punctuation\">.</span>seats<span class=\"token punctuation\">.</span><span class=\"token function\">avg</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code>."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Aggregate Locality",
      "Examples"
    ],
    "paragraphs": [
      "The following queries show six ways of calculating the average number of seats.",
      "This table summarizes the meaning of each of these calculations."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Aggregate Locality",
      "Aggregates that Support Locality"
    ],
    "paragraphs": [
      "The aggregate functions that support locality are <code class=\"language-malloy\">count</code>, <code class=\"language-malloy\">sum</code>, and <code class=\"language-malloy\">avg</code>.",
      "The <code class=\"language-malloy\">min</code> and <code class=\"language-malloy\">max</code> aggregates do not support aggregate locality because the minimum and maximum values are the same regardless of where they are computed. Local aggregation removes duplicate values (those corresponding to the same row in the aggregate source location), and minimum and maximum values do not change if values are repeated more than once."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Aggregates",
      "Aggregate Locality",
      "Aggregates on Fields"
    ],
    "paragraphs": [
      "Aggregating \"on a field,\" e.g. <code class=\"language-malloy\">aircraft_models<span class=\"token punctuation\">.</span>seats<span class=\"token punctuation\">.</span><span class=\"token function\">avg</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code> is exactly equivalent to aggregating that field with respect to its direct parent explore, e.g. <code class=\"language-malloy\">aircraft_models<span class=\"token punctuation\">.</span><span class=\"token function\">avg</span><span class=\"token punctuation\">(</span>aircraft_models<span class=\"token punctuation\">.</span>seats<span class=\"token punctuation\">)</span></code>. This syntax is supported for the aggregate functions which benefit from aggregate locality and require a field, <code class=\"language-malloy\">avg</code> and <code class=\"language-malloy\">sum</code>.",
      "Malloy supports the standard aggregate functions <code class=\"language-malloy\">count</code>, <code class=\"language-malloy\">sum</code>, <code class=\"language-malloy\">avg</code>, <code class=\"language-malloy\">min</code>, and <code class=\"language-malloy\">max</code>. When these are used in a field's definition, they make that field a <a href=\"fields.html#measures\">measure</a>.",
      "However, this isn't actually the number you were interested in, because this measures the average number of seats across <em>all</em> aircraft models, not just the ones with actively-registered aircraft.",
      "Unfortunately, SQL doesn't have any native constructs to compute this value, and in practice analysts often resort to complicated <a href=\"https://www.zentut.com/data-warehouse/fact-table/\">fact tables</a> to perform this kind of query.",
      "Malloy introduces the concept of <em>aggregate locality</em>, meaning that aggregates can be computed with respect to different points in the data graph. In the following query, <code class=\"language-malloy\">average_seats</code> is computed with respect to <code class=\"language-malloy\">aircraft_models</code>,\nyielding the the average number of seats on aircraft models of aircraft listed in the <code class=\"language-malloy\">aircraft</code> table."
    ],
    "path": "/language/aggregates.md"
  },
  {
    "titles": [
      "Apply (:) Operator"
    ],
    "paragraphs": [
      "The apply operator takes one expression and applies it to another.\nThe primary us of apply is to \"apply\" a value to a partial comparison,\nbut there are a number of other powerful gestures which use this operator.",
      "For an expression matching the pattern <code class=\"language-malloy\">x : expression</code>, the following table outlines the various meanings.",
      "In addition it is very common to use <a href=\"time-ranges.html\">Time Ranges</a>\nwith the apply operator, which operate similar to the numeric range\nexample above."
    ],
    "path": "/language/apply.md"
  },
  {
    "titles": [
      "Malloy Quickstart"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Leading with the Source"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Query Operators"
    ],
    "paragraphs": [
      "In SQL, the <code>SELECT</code> command does two very different things.  A <code>SELECT</code> with a <code>GROUP BY</code> aggregates data according to the <code>GROUP BY</code> clause and produces aggregate calculation against every calculation not in the <code>GROUP BY</code>.  In Malloy, the query operator for this is <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span>:</code>.  Calculation about data in the group are made using <code class=\"language-malloy\"><span class=\"token keyword\">aggregate</span>:</code>.",
      "The second type of <code>SELECT</code> in SQL does not perform any aggregation;  All rows in the input table, unless filtered in some way, show up in the output table. In Malloy, this command is called <code class=\"language-malloy\"><span class=\"token keyword\">project</span>:</code>.",
      "In the query below, the data will be grouped by <code class=\"language-malloy\">state</code> and will produce an aggregate calculation for <code class=\"language-malloy\">airport_count</code> and <code class=\"language-malloy\">average_elevation</code>.  <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span>:</code>. The <code class=\"language-malloy\"><span class=\"token keyword\">aggregate</span>:</code> list can contain references to existing aggregate fields or add new aggregate computations."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Query Operators",
      "Multiple Field Operations"
    ],
    "paragraphs": [
      "Multiple <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span>:</code> and <code class=\"language-malloy\"><span class=\"token keyword\">aggregate</span>:</code> statements can appear in the same query operation.  This can be helpful in rendering when the order of fields in the query output is significant."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Query Operators",
      "Project"
    ],
    "paragraphs": [
      "<code class=\"language-malloy\"><span class=\"token keyword\">project</span></code> produces a list of fields.  For every row in the input table, there is a row in the output table."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Everything has a Name"
    ],
    "paragraphs": [
      "Named objects, like columns from a table, and fields defined in an explore, can be included\nin field lists without an <code class=\"language-malloy\"><span class=\"token keyword\">is</span></code>"
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Expressions"
    ],
    "paragraphs": [
      "Many SQL expressions will work unchanged in Malloy, and many functions available in Standard SQL are usable in Malloy as well. This makes expressions fairly straightforward to understand, given a knowledge of SQL.",
      "The basic types of Malloy expressions are <code class=\"language-malloy\"><span class=\"token type\">string</span></code>, <code class=\"language-malloy\"><span class=\"token type\">number</span></code>, <code class=\"language-malloy\"><span class=\"token type\">boolean</span></code>, <code class=\"language-malloy\"><span class=\"token type\">date</span></code>, and <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code>."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Modeling and Reuse"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Ordering and Limiting"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\"><span class=\"token keyword\">top</span>:</code> and <code class=\"language-malloy\"><span class=\"token keyword\">limit</span>:</code> statements are synonyms and limits the number of rows returned. Results below are sorted by the first measure descending--in this case, <code class=\"language-malloy\">airport_count</code>.",
      "Default ordering can be overridden with <code class=\"language-malloy\"><span class=\"token keyword\">order_by</span>:</code>, as in the following query, which shows the states in alphabetical order.  <code class=\"language-malloy\"><span class=\"token keyword\">order_by</span>:</code> can take a field index number or the name of a field."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Filtering"
    ],
    "paragraphs": [
      "When working with data, filtering is something you do in almost every query. Malloy's filtering is more powerful and expressive than that of SQL. When querying data, we first isolate the data we are interested in (filter it) and then perform aggregations and calculations on the data we've isolated (shape it). Malloy provides consistent syntax for filtering everywhere within a query."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Filtering",
      "Filtering Tables"
    ],
    "paragraphs": [
      "A filter on a data source table narrows down which data is included to be passed to the Query Operation. This translates\nto a <code>WHERE</code> clause in SQL.\nIn this case, the data from the table is filtered to just airports in California."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Filtering",
      "Filtering Measures"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Filtering",
      "Filtering in Query Stages"
    ],
    "paragraphs": [
      "Filters can also be applied to any Query Operation. When using a filter in this way, it only applies to\nthe data for that operation alone. (More on this later, in the section on <code class=\"language-malloy\"><span class=\"token keyword\">nest</span>:</code> operations in queries.)"
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Dates and Timestamps"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Dates and Timestamps",
      "Time Literals"
    ],
    "paragraphs": [
      "Literals of type <code class=\"language-malloy\"><span class=\"token type\">date</span></code> and <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code> are notated with an <code class=\"language-malloy\"><span class=\"token date\">@</span></code>, e.g. <code class=\"language-malloy\"><span class=\"token date\">@2003-03-29</span></code> or <code class=\"language-malloy\"><span class=\"token date\">@1994-07-14 10:23:59</span></code>. Similarly, years (<code class=\"language-malloy\"><span class=\"token date\">@2021</span></code>), quarters (<code class=\"language-malloy\"><span class=\"token date\">@2020-Q1</span></code>), months (<code class=\"language-malloy\"><span class=\"token date\">@2019-03</span></code>), weeks (<code class=\"language-malloy\"><span class=\"token date\">@WK2021-08-01</span></code>), and minutes (<code class=\"language-malloy\"><span class=\"token date\">@2017-01-01 10:53</span></code>) can be expressed.",
      "Time literals can be used as values, but are more often useful in filters. For example, the following query\nshows the number of flights in 2003.",
      "There is a special time literal <code class=\"language-malloy\">now</code>, referring to the current timestamp, which allows for relative time filters."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Dates and Timestamps",
      "Truncation"
    ],
    "paragraphs": [
      "Time values can be truncated to a given timeframe, which can be <code class=\"language-malloy\"><span class=\"token timeframe\">second</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">minute</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">hour</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">day</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">week</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">month</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">quarter</span></code>, or <code class=\"language-malloy\"><span class=\"token timeframe\">year</span></code>."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Dates and Timestamps",
      "Extraction"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Dates and Timestamps",
      "Time Ranges"
    ],
    "paragraphs": [
      "Two kinds of time ranges are given special syntax: the range between two times and the range starting at some time for some duration. These are represented like <code class=\"language-malloy\"><span class=\"token date\">@2003</span> <span class=\"token keyword\">to</span> <span class=\"token date\">@2005</span></code> and <code class=\"language-malloy\"><span class=\"token date\">@2004-Q1</span> <span class=\"token keyword\">for</span> <span class=\"token number\">6</span> <span class=\"token timeframe\">quarters</span></code> respectively. These ranges can be used in filters just like time literals.",
      "Time literals and truncations can also behave like time ranges. Each kind of time literal has an implied duration that takes effect when it is used in a comparison, e.g. <code class=\"language-malloy\"><span class=\"token date\">@2003</span></code> represents the whole of the year 2003, and <code class=\"language-malloy\"><span class=\"token date\">@2004-Q1</span></code> lasts the whole 3 months of the quarter. Similarly, when a time value is truncated, it takes on the\ntimeframe from the truncation, e.g. <code class=\"language-malloy\">now<span class=\"token punctuation\">.</span><span class=\"token timeframe\">month</span></code> means the entirety of the current month.",
      "When a time range is used in a comparison, <code class=\"language-malloy\"><span class=\"token operator\">=</span></code> checks for \"is in the range\", <code class=\"language-malloy\"><span class=\"token operator\">></span></code> \"is after\", and <code class=\"language-malloy\"><span class=\"token operator\">&lt;</span></code> \"is before.\" So <code class=\"language-malloy\">some_time <span class=\"token operator\">></span> <span class=\"token date\">@2003</span></code> filters dates starting on January 1, 2004, while <code class=\"language-malloy\">some_time <span class=\"token operator\">=</span> <span class=\"token date\">@2003</span></code> filters to dates in the year 2003."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Nested Queries"
    ],
    "paragraphs": [
      "The next several examples will use this simple explore definition:"
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Nested Queries",
      "Aggregating Subqueries"
    ],
    "paragraphs": [
      "Here we can see that the <code class=\"language-malloy\">by_facility</code> column of the output table contains nested subtables on each row. When interpreting these inner tables, all of the dimensional values from outer rows still apply to each of the inner rows.",
      "Queries can be nested infinitely, allowing for rich, complex output structures. A query may always include another nested query, regardless of depth."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Nested Queries",
      "Filtering Nested Queries"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Piping and Multi-stage Queries"
    ],
    "paragraphs": [
      "The output from one stage of a query can be \"piped\" into another stage using <code class=\"language-malloy\"><span class=\"token operator\">|</span></code>. For example, we'll start with this query which outputs, for California and New York, the total number of airports, as well as the number of airports in each county.",
      "Next, we'll use the output of that query as the input to another, where we determine which counties have the highest\npercentage of airports compared to the whole state, taking advantage of the nested structure of the data to to so."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Joins"
    ],
    "paragraphs": [
      "Joins are declared as part of an explore, and link primary and foreign keys.",
      "In this example, the <code class=\"language-malloy\">airports</code> explore is joined to <code class=\"language-malloy\">flights</code>, linking the foreign key <code class=\"language-malloy\">origin</code> of <code class=\"language-malloy\">flights</code> to the primary key <code class=\"language-malloy\">code</code> of <code class=\"language-malloy\">airports</code>. The resulting joined explore is aliased as <code class=\"language-malloy\">origin_airport</code> within <code class=\"language-malloy\">flights</code>."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Aggregate Calculations"
    ],
    "paragraphs": [],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Malloy Quickstart",
      "Comments"
    ],
    "paragraphs": [
      "Malloy code can include both line and block comments. Line comments, which begin with <code class=\"language-malloy\"><span class=\"token comment\">--</span></code> or <code class=\"language-malloy\"><span class=\"token comment\">//</span></code>,\nmay appear anywhere within a line, and cause all subsequent characters on that line to be ignored.\nBlock comments, which are enclosed between <code>/*</code> and <code>*/</code>, cause all enclosed characters to be ignored\nand may span multiple lines.",
      "This guide will introduce the basics of querying and modeling with Malloy.  Results here are shown in JSON.  Malloy has a rendering system that can render <a href=\"../visualizations/dashboards.html\">results as tables, charts or dashboards</a>, but fundamentally the Malloy just returns data.",
      "<em>Note: If you'd like to follow along with this guide, you can create a new <code>.malloy</code> file and run these queries there.</em>",
      "Queries are of the form \"<em>source</em> <code class=\"language-malloy\"><span class=\"token operator\">-</span><span class=\"token operator\">></span></code> <em>operation</em>\"",
      "In Malloy, the source of a query is either a raw table, a <a href=\"explore.html\">modeled explore</a>, or another query.",
      "In this example the <code class=\"language-malloy\"><span class=\"token function\">table</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code> function provides the query <em>source</em> from a table (or view) in the database.\nThey query <em>operation</em> is explicit about which fields are grouped, aggregated or projected.",
      "In Malloy, all output fields have names. This means that any time a query\nintroduces a new aggregate computation, it must be named. <em>(unlike SQL,\nwhich allows un-named expressions)</em>",
      "Notice that Malloy uses the form \"<em>name</em> <code class=\"language-malloy\"><span class=\"token keyword\">is</span></code> <em>value</em>\" instead of SQL's \"<em>value</em> <code class=\"language-malloy\"><span class=\"token keyword\">as</span></code> <em>name</em>\".\nHaving the output column name written first makes it easier for someone reading\nthe code to visualize the resulting query structure.",
      "One of the main benefits of Malloy is the ability to save common calculations into a data model.  In the example below, we create an <em>explore</em> object named <code class=\"language-malloy\">airports</code> and\nadd a <code class=\"language-malloy\"><span class=\"token keyword\">dimension</span>:</code> calculation for <code class=\"language-malloy\">county_and_state</code> and <code class=\"language-malloy\"><span class=\"token keyword\">measure</span>:</code> calculation for <code class=\"language-malloy\">airport_count</code>.  Dimensions can be used in <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span>:</code>, <code class=\"language-malloy\"><span class=\"token keyword\">project</span>:</code> and <code class=\"language-malloy\"><span class=\"token keyword\">where</span>:</code>.  Measures can be used in <code class=\"language-malloy\"><span class=\"token keyword\">aggregate</span>:</code> and <code class=\"language-malloy\"><span class=\"token keyword\">having</span>:</code>.",
      "In Malloy, ordering and limiting work pretty much the same way they do in SQL, though Malloy introduces some <a href=\"order_by.html\">reasonable defaults</a>.",
      "A filter on an aggregate calculation (a <em>measure</em>) narrows down the data used in that specific calculation. In the example below, the calculations for <code class=\"language-malloy\">airports</code> and <code class=\"language-malloy\">heliports</code> are filtered separately.",
      "Working with time in data is often needlessly complex; Malloy has built in constructs to simplify many time-related operations. This section gives a brief introduction to some of these tools, but for more details see the <a href=\"time-ranges.html\">Time Ranges</a> section.",
      "Numeric values can be extracted from time values, e.g. <code class=\"language-malloy\"><span class=\"token timeframe\">day_of_year</span><span class=\"token punctuation\">(</span>some_date<span class=\"token punctuation\">)</span></code> or <code class=\"language-malloy\"><span class=\"token timeframe\">minute</span><span class=\"token punctuation\">(</span>some_time<span class=\"token punctuation\">)</span></code>. See the full list of extraction functions <a href=\"time-ranges.html#extraction\">here</a>.",
      "In Malloy, queries can be <a href=\"nesting.html\">nested</a> to produce subtables on each output row. Such nested queries are called <em>aggregating subqueries</em>, or simply \"nested queries.\" When a query is nested inside another query, each output row of the outer query will have a nested table for the inner query which only includes data limited to that row.",
      "Filters can be isolated to any level of nesting. In the following example, we limit the <code class=\"language-malloy\">major_facilities</code> query to only airports where <code class=\"language-malloy\">major</code> is <code class=\"language-malloy\"><span class=\"token string\">'Y'</span></code>. This particular filter applies <em>only</em> to <code class=\"language-malloy\">major_facilities</code>, and not to other parts of the outer query.",
      "As in SQL, aggregate functions <code class=\"language-malloy\">sum</code>, <code class=\"language-malloy\">count</code>, and <code class=\"language-malloy\">avg</code> are available, and their use in\nan expression identifies the corresponding field as a <a href=\"fields.html#measures\">measure</a>.",
      "Aggregates may be computed with respect to any joined explore, allowing for a wider variety of measurements to be calculated than is possible in SQL. See the <a href=\"aggregates.html#aggregate-locality\">Aggregate Locality</a> section for more information."
    ],
    "path": "/language/basic.md"
  },
  {
    "titles": [
      "Explores"
    ],
    "paragraphs": [
      "An explore consists of a data source along with a list of\nadditional properties which extend it, such as named fields, queries, and joins. When an explore is used in a query,\neverything from the original source and all its extensions can be referenced."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Sources"
    ],
    "paragraphs": [
      "An explore's source can be any of the following:",
      "A SQL table or view",
      "Another Malloy explore",
      "A Malloy query"
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Sources",
      "Explores from Tables or Views"
    ],
    "paragraphs": [
      "An explore can be created from a SQL table or view from a connected database.",
      "When defining an explore in this way, all the columns from\nthe source table are available for use in field definitions\nor queries."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Sources",
      "Explores from Other Explores"
    ],
    "paragraphs": [
      "An explore can also be created from another explore in order\nto add fields, impose filters, or restrict available fields.\nThis is useful for performing in-depth analysis without altering\nthe base explore with modifications only relevant in that specific context."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Sources",
      "Explores from Queries"
    ],
    "paragraphs": [
      "A Query can be used as the source for an explore.\nIn Malloy, every query has a shape like that of an explore,\nso the output fields of a query can be used to define a new\nexplore.",
      "When defining an explore from a query, the query can either\nbe defined inline or referenced by name."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Modifications"
    ],
    "paragraphs": [
      "An explore can introduce a number of different\nmodifications or additions to its source, including adding\nfilters, specifying a <code class=\"language-malloy\">primary <span class=\"token keyword\">key</span></code>, adding fields and\njoins, renaming fields, or limiting which fields are\navailable."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Modifications",
      "Filtering Explores"
    ],
    "paragraphs": [
      "When an explore is defined, filters which apply to any query against the new explore may be added."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Modifications",
      "Primary Keys"
    ],
    "paragraphs": [
      "To be used in joins to other explores, an explore must\nhave a primary key specified."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Modifications",
      "Joins"
    ],
    "paragraphs": [
      "When explores are joined as part of their definition, queries can reference fields in the joined explores without having to specify the join relationship each time."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Modifications",
      "Adding Fields"
    ],
    "paragraphs": [
      "Fields—dimensions, measures, and queries—may be defined as\npart of an explore, allowing for them to be used in any\nquery against the explore."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Modifications",
      "Renaming Fields"
    ],
    "paragraphs": [
      "Fields from an explore's source may be renamed in the context of the\nnew explore. This is useful when the original name is not descriptive, or has a different meaning in the new explore."
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Explores",
      "Explore Modifications",
      "Limiting Access to Fields"
    ],
    "paragraphs": [
      "The list of fields available in an explore from its source\ncan be limited. This can be done either by <code class=\"language-malloy\"><span class=\"token keyword\">accept</span></code>ing a\nlist of fields to include (in which case any other field\nfrom the source is excluded, i.e. an \"allow list\") or by\n<code class=\"language-malloy\"><span class=\"token keyword\">except</span></code>ing a list of fields to exclude (any other field\nis included, i.e. a \"deny list\"). These cannot be used in\nconjunction with one another.",
      "<strong>Inline query as explore source</strong>",
      "<strong>Named query as explore source</strong>",
      "For more information about named queries appearing in models, see the <a href=\"statement.html\">Models</a> section.",
      "See the <a href=\"join.html\">Joins</a> section for more information on working with joins.",
      "<strong>Accepting fields</strong>",
      "<strong>Excepting fields</strong>"
    ],
    "path": "/language/explore.md"
  },
  {
    "titles": [
      "Expressions"
    ],
    "paragraphs": [
      "Expressions in Malloy are much like expressions in any other language; they can have variables and operators and function calls in\nthe same syntax users are familiar with. However, Malloy also introduces several other kinds of expressions useful for the task of data analysis and transformation."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Identifiers"
    ],
    "paragraphs": [
      "Fields may be referenced by name, and fields in joins or nested structures can be described using <code class=\"language-malloy\"><span class=\"token punctuation\">.</span></code>s.",
      "Identifiers that share a name with a keyword in Malloy must be enclosed in back ticks <code class=\"language-malloy\"><span class=\"token punctuation\">`</span></code>, e.g. <code class=\"language-malloy\"><span class=\"token identifier\">`year`</span></code>."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Mathematical Operators"
    ],
    "paragraphs": [
      "Typical mathematical operators <code class=\"language-malloy\"><span class=\"token operator\">+</span></code>, <code class=\"language-malloy\"><span class=\"token operator\">-</span></code>, <code class=\"language-malloy\"><span class=\"token operator\">*</span></code>, and <code class=\"language-malloy\"><span class=\"token operator\">/</span></code> work as expected, and parentheses may be used to override precedence, e.g. <code class=\"language-malloy\">six <span class=\"token keyword\">is</span> <span class=\"token number\">10</span> <span class=\"token operator\">*</span> <span class=\"token punctuation\">(</span><span class=\"token number\">3</span> <span class=\"token operator\">-</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">/</span> <span class=\"token number\">2</span> <span class=\"token operator\">+</span> <span class=\"token number\">1</span></code>.",
      "The unary minus / negation operator is also allowed, e.g. <code class=\"language-malloy\">value <span class=\"token keyword\">is</span> <span class=\"token operator\">-</span>cost</code>."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Logical Operators"
    ],
    "paragraphs": [],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Logical Operators",
      "Comparison Operators"
    ],
    "paragraphs": [
      "Standard comparison operators <code class=\"language-malloy\"><span class=\"token operator\">></span></code>, <code class=\"language-malloy\"><span class=\"token operator\">&lt;</span></code>, <code class=\"language-malloy\"><span class=\"token operator\">>=</span></code>, <code class=\"language-malloy\"><span class=\"token operator\">&lt;=</span></code>, and <code class=\"language-malloy\"><span class=\"token operator\">=</span></code> are available in Malloy. \"Not equals\" is expressed using the <code class=\"language-malloy\"><span class=\"token operator\">!=</span></code> operator."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Logical Operators",
      "Boolean Operators"
    ],
    "paragraphs": [
      "Malloy includes the basic binary boolean operators <code class=\"language-malloy\"><span class=\"token keyword\">and</span></code> and <code class=\"language-malloy\"><span class=\"token keyword\">or</span></code>, as well as the unary <code class=\"language-malloy\"><span class=\"token keyword\">not</span></code> operator."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "SQL Functions"
    ],
    "paragraphs": [
      "The intention is to be able to call from Malloy any function which\nyou could call from Standard SQL. This is not well implemented at\nthe moment. If you experience type check errors, use the <code class=\"language-malloy\">::type</code>\ntypecast to work around the errors in typing."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Aggregation"
    ],
    "paragraphs": [],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Filtered Expressions"
    ],
    "paragraphs": [],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Safe Type Cast"
    ],
    "paragraphs": [
      "Safe type casting may be accomplished with the <code class=\"language-malloy\">::type</code> syntax."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Pick Expressions"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\"><span class=\"token keyword\">pick</span></code> construction in Malloy is similar to <code>CASE</code> statements in SQL.",
      "Pick can be used to \"clean\" data, combining similar dirty values into one clean value. In the following example, the <code class=\"language-malloy\"><span class=\"token keyword\">pick</span></code> statement collects all the \"this actually\nshipped\" statuses, and because there is no <code class=\"language-malloy\"><span class=\"token keyword\">else</span></code>, leaves the other\nstatus values alone.",
      "Another common kind of cleaning is to have a small set you want to group\nby and all other values are compressed into <code class=\"language-malloy\"><span class=\"token keyword\">null</span></code>. A <code class=\"language-malloy\"><span class=\"token keyword\">pick</span></code> clause with no value\npicks an applied value when the condition is met."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Time Expressions"
    ],
    "paragraphs": [
      "Malloy has built in constructs to simplify many time-related operations, which are described here."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Time Expressions",
      "Time Ranges"
    ],
    "paragraphs": [
      "<a id=\"numeric-ranges\"></a>",
      "Ranges between a start and end time can be constructed with the <code class=\"language-malloy\"><span class=\"token keyword\">to</span></code> operator, e.g. <code class=\"language-malloy\"><span class=\"token date\">@2003</span> <span class=\"token keyword\">to</span> <span class=\"token date\">@2006</span></code>. This kind of range is also possible for numbers, e.g. <code class=\"language-malloy\"><span class=\"token number\">10</span> <span class=\"token keyword\">to</span> <span class=\"token number\">20</span></code>.",
      "Time ranges can also be constructed with a start time and duration using the <code class=\"language-malloy\"><span class=\"token keyword\">for</span></code> operator, e.g. <code class=\"language-malloy\"><span class=\"token date\">@2003</span> <span class=\"token keyword\">for</span> <span class=\"token number\">6</span> <span class=\"token timeframe\">years</span></code> or <code class=\"language-malloy\">now <span class=\"token keyword\">for</span> <span class=\"token number\">20</span> <span class=\"token timeframe\">minutes</span></code>."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Time Expressions",
      "Time Truncation"
    ],
    "paragraphs": [
      "To truncate a time value to a given timeframe, use the <code class=\"language-malloy\"><span class=\"token punctuation\">.</span></code> operator followed by the timeframe, e.g. <code class=\"language-malloy\">event_time<span class=\"token punctuation\">.</span><span class=\"token timeframe\">quarter</span></code> or <code class=\"language-malloy\">now<span class=\"token punctuation\">.</span><span class=\"token timeframe\">year</span></code>.",
      "By way of example, if the value of <code class=\"language-malloy\">time</code> is <code class=\"language-malloy\"><span class=\"token date\">@2021-08-06 00:36</span></code>, then the below truncations will produce the results on the right:",
      "A truncation made this way (unlike a truncation make in SQL with\n<code class=\"language-malloy\">TIMESTAMP_TRUNC<span class=\"token function\"></span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code>) can also function as a range. The range begins\nat the moment of truncation and the duration is the timeframe unit\nused to specify the truncation, so for example <code class=\"language-malloy\">time<span class=\"token punctuation\">.</span><span class=\"token timeframe\">year</span></code>\nwould be a range covering the entire year which contains <code class=\"language-malloy\">time</code>."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Time Expressions",
      "Time Extraction"
    ],
    "paragraphs": [
      "Another very common grouping for time related data is by particular components, and this extraction of a single component as an integer. In Malloy this gesture looks like a function call.",
      "The \"Result\" column uses a value of <code class=\"language-malloy\"><span class=\"token date\">@2021-08-06 00:55:05</span></code> for <code class=\"language-malloy\">expr</code>."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Time Expressions",
      "Time Literals"
    ],
    "paragraphs": [
      "Time literals are specified in malloy with the <code class=\"language-malloy\"><span class=\"token date\">@</span></code> character. A literal\nspecified this way has an implied duration which means a literal\ncan act like a range.",
      "For example the year <code class=\"language-malloy\"><span class=\"token date\">@2003</span></code> can be used with <code class=\"language-malloy\">event_time: <span class=\"token date\">@2003</span></code> to test if the\nevent happened in the year 2003."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Special Filter Expression Syntax"
    ],
    "paragraphs": [],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Special Filter Expression Syntax",
      "Partial Comparison"
    ],
    "paragraphs": [
      "Partial comparisons, or \"partials\" are written with a binary comparison operator followed by a value, e.g. <code class=\"language-malloy\"><span class=\"token operator\">></span> <span class=\"token number\">42</span></code> or <code class=\"language-malloy\"><span class=\"token operator\">!=</span> <span class=\"token keyword\">null</span></code>. These can be thought of as conditions-as-values, or as functions that return a boolean."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Special Filter Expression Syntax",
      "Alternation"
    ],
    "paragraphs": [
      "Conditions can be logically combined with the two alternation operators, <code class=\"language-malloy\"><span class=\"token operator\">&amp;</span></code> and <code class=\"language-malloy\"><span class=\"token operator\">|</span></code>. These are different from <code class=\"language-malloy\"><span class=\"token keyword\">and</span></code> and <code class=\"language-malloy\"><span class=\"token keyword\">or</span></code> in that they operate on conditions which return boolean values, rather than boolean values directly.",
      "Values can be used directly with the alternation operators, in which case the operator is assumed to be <code class=\"language-malloy\"><span class=\"token operator\">=</span></code>. For example, <code class=\"language-malloy\"><span class=\"token string\">'CA'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'NY'</span></code> is equivalent to <code class=\"language-malloy\"><span class=\"token operator\">=</span> <span class=\"token string\">'CA'</span> <span class=\"token operator\">|</span> <span class=\"token operator\">=</span> <span class=\"token string\">'NY'</span></code>."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Expressions",
      "Special Filter Expression Syntax",
      "Application"
    ],
    "paragraphs": [
      "The apply operator <code class=\"language-malloy\">:</code> \"applies\" a value to another value, condition, or computation. This is most often used with partial comparisons or alternations.",
      "Applying a value to a condition is like filling in the condition with the given value. For example, <code class=\"language-malloy\">height: <span class=\"token operator\">></span> <span class=\"token number\">5</span> <span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">10</span></code> is equivalent to <code class=\"language-malloy\">height <span class=\"token operator\">></span> <span class=\"token number\">5</span> <span class=\"token keyword\">and</span> height <span class=\"token operator\">&lt;</span> <span class=\"token number\">10</span></code>.",
      "Applying a value to another value applies a default comparison on the two values:",
      "Many functions available in SQL are available unchanged in Malloy. See <a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/syntax\">here</a> for documentation on functions available in BigQuery.",
      "Aggregations may included in an expression to create <a href=\"fields.html#measures\">measures</a>, e.g. <code class=\"language-malloy\"><span class=\"token function\">count</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code>, <code class=\"language-malloy\"><span class=\"token function\">sum</span><span class=\"token punctuation\">(</span>distance<span class=\"token punctuation\">)</span></code>, or <code class=\"language-malloy\">aircraft_models<span class=\"token punctuation\">.</span>seats<span class=\"token punctuation\">.</span><span class=\"token function\">avg</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code>. For detailed information, see the <a href=\"aggregates.html\">Aggregates</a> section.",
      "Aggregate expressions may be filtered, using the <a href=\"filters.html\">usual filter syntax</a>.",
      "Pick expressions are also compatible with the <a href=\"#apply-operator\">apply operator</a> and partial comparisons.",
      "A time value can be compared to a range. If the time is within the range it will be <code class=\"language-malloy\"><span class=\"token operator\">=</span></code>, before the range it will be <code class=\"language-malloy\"><span class=\"token operator\">&lt;</span></code>, and after the range it will be <code class=\"language-malloy\"><span class=\"token operator\">></span></code>. If you <a href=\"#apply-operator\">apply</a> a time to a range, (for example, <code class=\"language-malloy\">event_time: <span class=\"token date\">@2003</span> <span class=\"token keyword\">to</span> <span class=\"token date\">@2004</span></code>) that will also check if the value is within the range.",
      "This is extremely useful with the <a href=\"#apply-operator\">apply operator</a>, <code class=\"language-malloy\">:</code>. To see if two events happen in the same calendar year, for example, the boolean expression in Malloy is <code class=\"language-malloy\">one_time: other_time<span class=\"token punctuation\">.</span><span class=\"token timeframe\">year</span></code>.",
      "As filtering is an incredibly common operation in data analysis, Malloy has special syntax to make filter expressions succinct and powerful. In addition to regular comparison and boolean operators, Malloy includes <em>partial comparisons</em>, <em>alternation</em>, and <em>application</em>, as described below.",
      "The <em>union alternation</em> operator <code class=\"language-malloy\"><span class=\"token operator\">|</span></code> represents the logical union of two conditions. An expression like <code class=\"language-malloy\">x <span class=\"token operator\">|</span> y</code> can be read \"if either <code class=\"language-malloy\">x</code> or <code class=\"language-malloy\">y</code>.\" For example <code class=\"language-malloy\"><span class=\"token operator\">=</span> <span class=\"token string\">'CA'</span> <span class=\"token operator\">|</span> <span class=\"token operator\">=</span> <span class=\"token string\">'NY'</span></code> represents the condition \"is either CA or NY\".",
      "The <em>conjunction alternation</em> operator <code class=\"language-malloy\"><span class=\"token operator\">&amp;</span></code> represents the logical conjunction of two conditions. An expression like \"<code class=\"language-malloy\">x <span class=\"token operator\">&amp;</span> y</code> can be read \"if both <code class=\"language-malloy\">x</code> and <code class=\"language-malloy\">y</code>.\" For example, <code class=\"language-malloy\"><span class=\"token operator\">></span> <span class=\"token number\">5</span> <span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">10</span></code> represents the condition \"is greater than 5 and less than 10\".",
      "Values can be applied to <a href=\"#pick-expressions\">pick expressions</a> to make them more succinct."
    ],
    "path": "/language/expressions.md"
  },
  {
    "titles": [
      "Fields"
    ],
    "paragraphs": [
      "Fields constitute all kinds of data in Malloy. They\ncan represent dimensional attributes sourced directly from\ntables in a database, constant values to be used in later analysis, computed metrics derived from other fields, or even nested structures created from aggregating subqueries."
    ],
    "path": "/language/fields.md"
  },
  {
    "titles": [
      "Fields",
      "Defining Fields"
    ],
    "paragraphs": [
      "Fields are defined in explores are reusable and are <code class=\"language-malloy\"><span class=\"token keyword\">dimension</span></code>, <code class=\"language-malloy\">measures</code> or <code class=\"language-malloy\"><span class=\"token keyword\">query</span></code>.  When these are used in a query, these fields are <code class=\"language-malloy\"><span class=\"token keyword\">project</span></code>, <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span></code>, <code class=\"language-malloy\"><span class=\"token keyword\">aggregate</span></code> or <code class=\"language-malloy\"><span class=\"token keyword\">nest</span></code>.   The definitions are the same way whether part of an\nexplore or a query stage. In either case, they are defined using the <code class=\"language-malloy\"><span class=\"token keyword\">is</span></code> keyword."
    ],
    "path": "/language/fields.md"
  },
  {
    "titles": [
      "Fields",
      "Field Names"
    ],
    "paragraphs": [
      "Field names must start with a letter or underscore, and can only contain letters, numbers, and underscores. Field names which conflict with keywords must be enclosed in back ticks, e.g. <code class=\"language-malloy\"> <span class=\"token identifier\">`year`</span> <span class=\"token keyword\">is</span> dep_time<span class=\"token punctuation\">.</span><span class=\"token timeframe\">year</span></code>."
    ],
    "path": "/language/fields.md"
  },
  {
    "titles": [
      "Fields",
      "Kinds of Fields"
    ],
    "paragraphs": [],
    "path": "/language/fields.md"
  },
  {
    "titles": [
      "Fields",
      "Kinds of Fields",
      "Dimensions"
    ],
    "paragraphs": [
      "Dimensions are fields representing scalar values. All fields\ninherited directly from a table are dimensions.",
      "Dimensions are defined using expressions that contain no\naggregate functions.",
      "Dimensions may be used in both <code class=\"language-malloy\"><span class=\"token keyword\">reduce</span></code> and <code class=\"language-malloy\"><span class=\"token keyword\">project</span></code>\nqueries."
    ],
    "path": "/language/fields.md"
  },
  {
    "titles": [
      "Fields",
      "Kinds of Fields",
      "Measures"
    ],
    "paragraphs": [
      "Measures are fields representing aggregated data over\nmultiple records.",
      "Measures may not be used in <code class=\"language-malloy\"><span class=\"token keyword\">project</span></code> queries. However, any measures that appear in a <code class=\"language-malloy\"><span class=\"token keyword\">reduce</span></code> query stage are \"dimensionalized\" as part of the query, and are therefore usable as dimensions in subsequent stages."
    ],
    "path": "/language/fields.md"
  },
  {
    "titles": [
      "Fields",
      "Kinds of Fields",
      "Queries"
    ],
    "paragraphs": [
      "Queries represent a pipelined data transformation including a source and one or more transformation stages. When queries are defined as part of an explore or query stage,\ntheir source is implicit.",
      "A named query's pipeline can always begin with another named query.",
      "<strong>In an explore</strong>",
      "<strong>In a query stage</strong>",
      "The right hand side of this kind of definition can be any\nfield expression. See the <a href=\"expressions.html\">Expressions</a>\nsection for more information.",
      "Named queries (see <a href=\"#queries\">below</a>) can also be defined as\npart of an explore or query stage. When a named query is defined in a query stage, it is known as a \"nested query\" or an \"aggregating\nsubquery.\" See the <a href=\"nesting.html\">Nesting</a> section for a\ndetailed discussion of nested queries.",
      "Malloy includes three different <em>kinds</em> of fields: <em>dimensions</em>, <em>measures</em>, and <em>queries</em>.",
      "See the <a href=\"nesting.html\">Nesting</a> section for more details about named queries."
    ],
    "path": "/language/fields.md"
  },
  {
    "titles": [
      "Filters"
    ],
    "paragraphs": [
      "Filtering which data is used in a query is an incredibly important aspect of data analysis. Malloy makes it easy to target specific parts of a query to apply individual filters."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Filter Syntax"
    ],
    "paragraphs": [
      "Regardless of the placement of a filter, the syntax looks the same.",
      "Logically, the comma-separated list of filters are <code class=\"language-malloy\"><span class=\"token keyword\">and</span></code>ed together, though in reality different conditions are checked in different places in the generated SQL, depending on what types of computation occurs in the expression."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Filter Placement"
    ],
    "paragraphs": [
      "A filter can be applied to the source of a query, to just one stage of a query, or even to a particular field or expression (measure or nested query)."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Filter Placement",
      "Filtering a Query's Source"
    ],
    "paragraphs": [
      "When filtering a query's source, the filter applies to the whole query."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Filter Placement",
      "Filtering in a Query Stage"
    ],
    "paragraphs": [
      "A filter can also be applied to an individual query stage."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Filter Placement",
      "Filtering Aggregate Calculations"
    ],
    "paragraphs": [
      "Any measure can be filtered by adding a where clause."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Filter Placement",
      "Filtering Complex Measure"
    ],
    "paragraphs": [
      "Even complex measures can be filtered.  A common use case is to create a filtered\nmeasure and then create that as a percent of total."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Filter Placement",
      "Filtering Nested Queries"
    ],
    "paragraphs": [
      "Even complex measures can be filtered.  A common use case is to create a filtered\nmeasure and then create that as a percent of total."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Common Patterns in Filters"
    ],
    "paragraphs": [],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Common Patterns in Filters",
      "Comparisons"
    ],
    "paragraphs": [
      "All the usual comparison operators behave as expected, and are some of the most common kinds of filters."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Common Patterns in Filters",
      "Combining Filters"
    ],
    "paragraphs": [
      "Filters can be logically combined using <code class=\"language-malloy\"><span class=\"token keyword\">and</span></code>, <code class=\"language-malloy\"><span class=\"token keyword\">or</span></code>, and <code class=\"language-malloy\"><span class=\"token keyword\">not</span></code>."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Common Patterns in Filters",
      "Ranges"
    ],
    "paragraphs": [
      "A range of numeric or time values can be constructed\nwith the <code class=\"language-malloy\"><span class=\"token keyword\">to</span></code>operator, e.g. <code class=\"language-malloy\"><span class=\"token number\">10</span> <span class=\"token keyword\">to</span> <span class=\"token number\">100</span></code>. The <code class=\"language-malloy\"><span class=\"token operator\">~</span></code> operator will check to\nsee if a value is within a range."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Common Patterns in Filters",
      "String \"Like\" Matching"
    ],
    "paragraphs": [
      "When comparing strings, the <code class=\"language-malloy\"><span class=\"token operator\">=</span></code> operator checks for pure equality, whereas the <code class=\"language-malloy\"><span class=\"token operator\">~</span></code> and <code class=\"language-malloy\"><span class=\"token operator\">!</span><span class=\"token operator\">~</span></code> operators, <code>LIKE</code> and <code>NOT LIKE</code>.",
      "In the right hand (pattern) string, the following syntax is used:",
      "A percent sign <code>%</code> matches any number of characters",
      "An underscore <code>_</code> matches a single character"
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Common Patterns in Filters",
      "Regular Expressions"
    ],
    "paragraphs": [
      "When the right hand side of a <code class=\"language-malloy\"><span class=\"token operator\">~</span></code> or <code class=\"language-malloy\"><span class=\"token operator\">!</span><span class=\"token operator\">~</span></code> operator is a regular expression,\nMalloy checks whether the left hand side matches that regular expression. In Standard SQL, Malloy uses the <code>REGEXP_COMPARE</code> function."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Common Patterns in Filters",
      "Alternation"
    ],
    "paragraphs": [],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Filters",
      "Examples of Filter Expressions"
    ],
    "paragraphs": [
      "Use this table as a quick reference for common types of filter expressions.",
      "Each filter be any expression of type <code class=\"language-malloy\"><span class=\"token type\">boolean</span></code>, whether that's a boolean field <code class=\"language-malloy\">is_commercial_flight</code>, a comparison <code class=\"language-malloy\">distance <span class=\"token operator\">></span> <span class=\"token number\">1000</span></code>, or any of the other kinds of boolean expressions that Malloy supports. For examples see <a href=\"#examples-of-filter-expressions\">the table below</a>, or for detailed information on the kinds of expressions Malloy supports, see the <a href=\"expressions.html\">Expressions</a> section.",
      "This section describes some of the more common patterns used in filter expressions. For a more detailed description of the possible kinds of expressions, see the <a href=\"expressions.html\">Expressions</a> section.",
      "Checking equality against multiple possible values is extremely common, and can be achieved succinctly using the <a href=\"expressions.html#application\">apply operator</a> and <a href=\"expressions.html#alternation\">alternation</a>."
    ],
    "path": "/language/filters.md"
  },
  {
    "titles": [
      "Imports"
    ],
    "paragraphs": [
      "In order to reuse or extend a explore from another file, you can include all the\nexported explores from another file using <code class=\"language-malloy\"><span class=\"token keyword\">import</span> <span class=\"token string\">\"path/to/some/file.malloy\"</span></code>.",
      "For example, if you wanted to create a file <code>samples/flights_by_carrier.malloy</code> with a query from the\n<code class=\"language-malloy\">flights</code> explore, you could write:"
    ],
    "path": "/language/imports.md"
  },
  {
    "titles": [
      "Imports",
      "Import Locations"
    ],
    "paragraphs": [
      "Imported files may be specified with relative or absolute URLs."
    ],
    "path": "/language/imports.md"
  },
  {
    "titles": [
      "Joins"
    ],
    "paragraphs": [
      "Joins in malloy are different than SQL joins.  When two explores are joined,\nMalloy retains the graph nature of the the data relationships. This is unlike\nSQL, which flattens them all into a single table space.",
      "In Malloy syntaxes for join are:",
      "<code class=\"language-malloy\"><span class=\"token keyword\">join_one</span>:</code> - the table we are joining has one row for each row in the source table.",
      "<code class=\"language-malloy\"><span class=\"token keyword\">join_many</span>:</code> - the table we are joining has many rows for each row in the source table",
      "<code class=\"language-malloy\"><span class=\"token keyword\">join_cross</span>:</code> - the join is a cross product and there will be many rows in each side of the join.",
      "Malloy's joins are left outer joins by default.\nSince Malloy deals in graphs, some SQL Join types don't make sense (RIGHT JOIN, for example)."
    ],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Joins",
      "Join Types"
    ],
    "paragraphs": [],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Joins",
      "Join Types",
      "Foreign Key to Primary Key"
    ],
    "paragraphs": [
      "The easiest, most error proof way to perform a join is with <code class=\"language-malloy\"><span class=\"token keyword\">join_one</span>:<span class=\"token operator\">/</span><span class=\"token keyword\">with</span></code>. The basic syntax is:",
      "<code class=\"language-malloy\"><span class=\"token keyword\">join_one</span>: <span class=\"token operator\">&lt;</span><span class=\"token keyword\">explore</span><span class=\"token operator\">></span> <span class=\"token keyword\">with</span> <span class=\"token operator\">&lt;</span>foreign_key<span class=\"token operator\">></span></code>",
      "To join a foreign key of the source explore to the <code class=\"language-malloy\">primary <span class=\"token keyword\">key</span></code> of a joined explore, reference the foreign key by name in the <code class=\"language-malloy\"><span class=\"token keyword\">with</span></code> clause."
    ],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Joins",
      "Naming Joined Explores"
    ],
    "paragraphs": [
      "If no name is specified with <code class=\"language-malloy\"><span class=\"token keyword\">is</span></code>, the name of the join will be the name of the\nexplore being joined.",
      "To give the joined explore a different name within the source explore, use <code class=\"language-malloy\"><span class=\"token keyword\">is</span></code> to specify the name of the explore."
    ],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Joins",
      "Inlining Joins"
    ],
    "paragraphs": [
      "Explores do not need to be named before they are used in a join. if the join\nuses <code class=\"language-malloy\"><span class=\"token keyword\">is</span></code> to give the join a name."
    ],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Joins",
      "Using Fields in Joined Explores"
    ],
    "paragraphs": [
      "When an explore is joined in, it becomes a nested field within the source explore. Fields within the joined explore can be referenced by first naming the joined explore, then accessing a contained field using <code class=\"language-malloy\"><span class=\"token punctuation\">.</span></code>.",
      "Measures and queries defined in joined explores may be used in addition to dimensions."
    ],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Joins",
      "Join Example"
    ],
    "paragraphs": [
      "This example demonstrates the definition of several different joins in a model and their use in a query.\nEntire subtrees of data can be joined.  In the example below, <code class=\"language-malloy\">aircraft</code> joins <code class=\"language-malloy\">aircraft_models</code>.  <code class=\"language-malloy\">flights</code>\njoins aircraft (which already has a join to aircraft manufacturer).  The tree nature of the join relationship\nretained.",
      "<code class=\"language-malloy\"><span class=\"token keyword\">group_by</span>: aircraft<span class=\"token punctuation\">.</span>aircraft_models<span class=\"token punctuation\">.</span>manufacturer</code>"
    ],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Joins",
      "SQL Joins"
    ],
    "paragraphs": [
      "Inner join are joins where the the joined table has rows. The example below, suppose we only want users that have at least one row in the orders table. The following is the equivalent of a SQL <code>INNER JOIN</code>.",
      "<a href=\"aggregates.html\">Aggregate calculations</a> use this graph to deduce\na locality of computation, so they always work regardless of join pattern.",
      "For more examples and how to reason about aggregation across joins, review the <a href=\"aggregates.html\">Aggregates</a> section."
    ],
    "path": "/language/join.md"
  },
  {
    "titles": [
      "Nested Queries"
    ],
    "paragraphs": [
      "Nested queries, more formally known as \"aggregating subqueries\" are queries included in other queries. A nested query produces a subtable per row in the query in which it is embedded. In Malloy, queries can be named and referenced in other queries. The technical term \"aggregating subquery\" is a bit of a mouthful, so we more often refer to it as a \"nested query.\"",
      "When a named query is nested inside of another query, it produces an aggregating subquery and the results include a nested subtable."
    ],
    "path": "/language/nesting.md"
  },
  {
    "titles": [
      "Nested Queries",
      "Nesting Nested Queries"
    ],
    "paragraphs": [
      "Aggregating subqueries can be nested infinitely, meaning that a nested query can contain another nested query."
    ],
    "path": "/language/nesting.md"
  },
  {
    "titles": [
      "Nested Queries",
      "Filtering Nested Queries"
    ],
    "paragraphs": [
      "Filters can be applied at any level within nested queries."
    ],
    "path": "/language/nesting.md"
  },
  {
    "titles": [
      "Ordering and Limiting"
    ],
    "paragraphs": [
      "Often when querying data the amount of data returned to look at is much smaller than the full result set, so the ordering of the data makes a big difference in what you actually see. To make things easier, Malloy has some smart defaults in the way it presents data.  For the most part, you don't have to think too much about it, but in order to understand it, this document will show you how Malloy makes decisions about what to show you."
    ],
    "path": "/language/order_by.md"
  },
  {
    "titles": [
      "Ordering and Limiting",
      "Implicit Ordering"
    ],
    "paragraphs": [],
    "path": "/language/order_by.md"
  },
  {
    "titles": [
      "Ordering and Limiting",
      "Implicit Ordering",
      "Rule 1: Newest first"
    ],
    "paragraphs": [],
    "path": "/language/order_by.md"
  },
  {
    "titles": [
      "Ordering and Limiting",
      "Implicit Ordering",
      "Rule 2: Largest first"
    ],
    "paragraphs": [
      "In the following example, Rule 1 doesn't apply, so the default behavior is to sort by first aggregate, <code class=\"language-malloy\">flight_count</code> with the largest values first."
    ],
    "path": "/language/order_by.md"
  },
  {
    "titles": [
      "Ordering and Limiting",
      "Explicit Ordering"
    ],
    "paragraphs": [
      "You can be explicit about result ordering by using the <code class=\"language-malloy\"><span class=\"token keyword\">order</span> <span class=\"token keyword\">by</span></code> clause.",
      "In the following example, the results are ordered by <code class=\"language-malloy\">carrier</code> in reverse alphabetical order.",
      "Like in SQL, Malloy's <code class=\"language-malloy\"><span class=\"token keyword\">order</span> <span class=\"token keyword\">by</span></code> always defaults to ascending order when <code class=\"language-malloy\"><span class=\"token keyword\">desc</span></code> is omitted. This is true for any column of any type. In the example below,\nthe results are ordered by <code class=\"language-malloy\">carrier</code> in alphabetical order."
    ],
    "path": "/language/order_by.md"
  },
  {
    "titles": [
      "Ordering and Limiting",
      "Limiting"
    ],
    "paragraphs": [
      "In Malloy, you can limit the number of results returned using a <code class=\"language-malloy\"><span class=\"token keyword\">top</span>: n</code> or <code class=\"language-malloy\"><span class=\"token keyword\">limit</span>: n</code>.  Both are provided for readability.",
      "In the example below, the results are limited to 2 rows, which are sorted by <code class=\"language-malloy\">dep_month</code> with newest results first (due to Rule 1).",
      "The following uses the <a href=\"../examples/faa.html\">NTSB Flight Model</a> for examples.",
      "If a query stage has a <a href=\"fields.html#dimensions\">dimensional</a> column that represents a point in time, it is usually the most\nimportant concept in the query.  Because the most recent data is usually the most relevant, Malloy sorts the newest data first.",
      "If there is a <a href=\"fields.html#measures\">measure</a> involved, Malloy sorts larger values first."
    ],
    "path": "/language/order_by.md"
  },
  {
    "titles": [
      "The Malloy Language"
    ],
    "paragraphs": [
      "Malloy is a language designed to provide a concise, powerful, and\nreadable vocabulary to express the kinds of data transformations\nneeded to extract useful information from a relational database.\nMalloy is essentially a Domain-specific Language (DSL) where the\n\"domain\" is \"exploration and transformation of SQL datasets.\"",
      "This section is designed to be an explorable reference to the\nunderlying language. For an overview of malloy, refer to the <a href=\"../language/basic.html\">Malloy Quickstart</a> introduction.",
      "<a href=\"about-malloy.html\">About Malloy</a> – A longer read, why is there Malloy and why does it look like it does",
      "<a href=\"query.html\">Queries</a> – How to write data transformations in malloy",
      "<a href=\"expressions.html\">Expressions</a> – How to write expressions in malloy",
      "<a href=\"statement.html\">Models</a> – How to collect and share transformations in malloy"
    ],
    "path": "/language/overview.md"
  },
  {
    "titles": [
      "Queries"
    ],
    "paragraphs": [],
    "path": "/language/query.md"
  },
  {
    "titles": [
      "Queries",
      "Sources"
    ],
    "paragraphs": [
      "When a query is defined as part of an explore or nested inside\nanother query stage, the source is implicit."
    ],
    "path": "/language/query.md"
  },
  {
    "titles": [
      "Queries",
      "Pipelines"
    ],
    "paragraphs": [
      "A pipeline transforms the shape of an explore, and is made up of a series of stages.",
      "A typical stage is has either <code class=\"language-malloy\"><span class=\"token keyword\">group_by</span></code>/<code class=\"language-malloy\"><span class=\"token keyword\">aggregate</span></code> or <code class=\"language-malloy\"><span class=\"token keyword\">project</span></code>, or <code class=\"language-malloy\"><span class=\"token keyword\">index</span></code> transformation consisting of a set of fields, and optionally filters and ordering/limiting specification."
    ],
    "path": "/language/query.md"
  },
  {
    "titles": [
      "Queries",
      "Pipelines",
      "Fields"
    ],
    "paragraphs": [
      "In a query stage, fields (dimensions, measures, or\nqueries) may be specified either by referencing an existing\nname or defining them inline.",
      "When referencing existing fields, wildcard expressions <code class=\"language-malloy\"><span class=\"token operator\">*</span></code>, <code class=\"language-malloy\"><span class=\"token operator\">*</span><span class=\"token operator\">*</span></code>, and <code class=\"language-malloy\">some_join<span class=\"token punctuation\">.</span><span class=\"token operator\">*</span></code> may be used."
    ],
    "path": "/language/query.md"
  },
  {
    "titles": [
      "Queries",
      "Pipelines",
      "Filters"
    ],
    "paragraphs": [
      "Filters specified at the top level of query stage apply to\nthe whole stage.",
      "At the query level",
      "or in the stage."
    ],
    "path": "/language/query.md"
  },
  {
    "titles": [
      "Queries",
      "Pipelines",
      "Ordering and Limiting"
    ],
    "paragraphs": [
      "Query stages may also include ordering and limiting\nspecifications.",
      "The basic syntax for a query in Malloy consists of a source\nand a \"pipeline\" of one or more <em>stages</em> separated by <code class=\"language-malloy\"><span class=\"token operator\">-</span><span class=\"token operator\">></span></code>. The shape of the data defined in the original explore is transformed by each stage.",
      "The source of a query can be a table, an <a href=\"explore.html\">explore</a>, or a <a href=\"statement.html#queries\">named query</a>.",
      "<strong>A query against a table</strong>",
      "<strong>A query against an explore</strong>",
      "<strong>A query starting from another query</strong>",
      "A reference to a <a href=\"nesting.html\">named query</a> (which defines its own pipeline) can be the first stage in a pipeline.",
      "See the <a href=\"fields.html\">Fields</a> section for more information\nabout the different kinds of fields and how they can be\ndefined.",
      "Filters may also be applied to a <a href=\"\">query's source</a>, an <a href=\"explore.html#filtering-explores\">entire explore</a>, or to a <a href=\"expressions.html\">measure</a>.",
      "See the <a href=\"filters.html\">Filters</a> section for more information.",
      "For detailed information on ordering and limiting, see the <a href=\"order_by.html\">Ordering and Limiting</a> section."
    ],
    "path": "/language/query.md"
  },
  {
    "titles": [
      "Models"
    ],
    "paragraphs": [],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Models",
      "Explores"
    ],
    "paragraphs": [],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Models",
      "Queries"
    ],
    "paragraphs": [],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Models",
      "Queries",
      "Using modeled in query."
    ],
    "paragraphs": [],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Models",
      "Queries",
      "Using modeled with a filter."
    ],
    "paragraphs": [],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Models",
      "Queries",
      "Setting a limit on the Query"
    ],
    "paragraphs": [],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Models",
      "Queries",
      "Creating a brand new Query."
    ],
    "paragraphs": [],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Models",
      "Queries",
      "Putting it all together."
    ],
    "paragraphs": [
      "Malloy recognizes modeling as a key aspect of data analytics and\nprovides tools that allow for modularity and reusability of definitions.\nWhereas in SQL, queries generally define all metrics inline,\nrequiring useful snippets to be saved and managed separately, in Malloy,\n<em>dimensions</em>, <em>measures</em>, and <em>queries</em> can be saved and attached to a\nmodeled <em>explore</em>.",
      "A Malloy model file can contain several <em>explores</em>, which define fields that can be\nused in queries.",
      "See <a href=\"explore.html\">here</a> for more information on explores.",
      "See <a href=\"query.html\">here</a> for more information on queries."
    ],
    "path": "/language/statement.md"
  },
  {
    "titles": [
      "Malloy time range expressions"
    ],
    "paragraphs": [],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Malloy time range expressions",
      "Range expressions"
    ],
    "paragraphs": [
      "There are two forms of range expressions"
    ],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Malloy time range expressions",
      "Range shortcuts"
    ],
    "paragraphs": [
      "Because grouping and filtering by specific time ranges is such a common operation for a data transformation task, Malloy has a number of expressive short cuts. The full power of the underlying SQL engine is also available for any type of truncation or extraction not supported by these shortcuts.",
      "Malloy supports two time-related types, <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code> and <code class=\"language-malloy\"><span class=\"token type\">date</span></code>.\nBoth of these can be used with these techniques, though the exact\ntruncations or extractions available will vary depending on the\ndata type (e.g. it would make no sense to attempt to truncate a <code class=\"language-malloy\"><span class=\"token type\">date</span></code> object by <code class=\"language-malloy\"><span class=\"token timeframe\">minute</span></code>)."
    ],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Malloy time range expressions",
      "Truncation"
    ],
    "paragraphs": [
      "To create truncation, use the <code class=\"language-malloy\"><span class=\"token punctuation\">.</span></code> operator followed by the desired timeframe.",
      "By way of example, if the value of <code class=\"language-malloy\">expr</code> is <code class=\"language-malloy\"><span class=\"token date\">@2021-08-06 00:36</span></code>, then the below truncations will produce the results on the right:"
    ],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Malloy time range expressions",
      "Truncation",
      "Truncations as ranges"
    ],
    "paragraphs": [
      "A truncation made this way (unlike a truncation make in SQL with\n<code class=\"language-malloy\">TIMESTAMP_TRUNC<span class=\"token function\"></span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span></code>) can also function as a range. The range begins\nat the moment of truncation and the duration is the timeframe unit\nused to specify the truncation, so for example <code class=\"language-malloy\">eventDate<span class=\"token punctuation\">.</span><span class=\"token timeframe\">year</span></code>\nwould be a range covering the entire year which contains <code class=\"language-malloy\">eventDate</code>"
    ],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Malloy time range expressions",
      "Extraction"
    ],
    "paragraphs": [
      "Another very common grouping for time related data is by particular components, and this extraction of a single component as an integer. In Malloy this gesture looks like a function call.",
      "The \"Result\" column uses a value of <code class=\"language-malloy\"><span class=\"token number\">2021</span><span class=\"token operator\">-</span><span class=\"token number\">08</span><span class=\"token operator\">-</span><span class=\"token number\">06</span> <span class=\"token number\">00</span>:<span class=\"token number\">55</span>:<span class=\"token number\">05</span></code> for <code class=\"language-malloy\">expr</code>."
    ],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Malloy time range expressions",
      "Literals"
    ],
    "paragraphs": [
      "Time literals are specified in malloy with the <code class=\"language-malloy\"><span class=\"token date\">@</span></code> character. A literal\nspecified this way has an implied duration which means a literal\ncan act like a range.",
      "For example the year <code class=\"language-malloy\"><span class=\"token date\">@2003</span></code> can be used with <code class=\"language-malloy\">eventTime : <span class=\"token date\">@2003</span></code> to test if the\nevent happened in the year 2003."
    ],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Malloy time range expressions",
      "Literals",
      "Time Units"
    ],
    "paragraphs": [
      "These are the time units currently supported by Malloy.",
      "<code class=\"language-malloy\"><span class=\"token timeframe\">second</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">minute</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">hour</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">week</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">month</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">quarter</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">year</span></code>",
      "<em>expr</em> <code class=\"language-malloy\"><span class=\"token keyword\">to</span></code> <em>expr</em> ( <code class=\"language-malloy\"><span class=\"token date\">@2001</span> <span class=\"token keyword\">to</span> <span class=\"token date\">@2003</span></code>)",
      "<em>expr</em> <code class=\"language-malloy\"><span class=\"token keyword\">for</span></code> <code class=\"language-malloy\">N</code> <em>units</em> ( <code class=\"language-malloy\">now <span class=\"token keyword\">for</span> <span class=\"token number\">15</span> <span class=\"token timeframe\">minutes</span></code> )",
      "A timestamp can be compared to a range. If the time stamp is within\nthe range it will be <code class=\"language-malloy\"><span class=\"token operator\">=</span></code>. Before the range it will be <code class=\"language-malloy\"><span class=\"token operator\">&lt;</span></code> and after\nthe range it will be <code class=\"language-malloy\"><span class=\"token operator\">></span></code>. If you <a href=\"apply.html\">apply</a> a range, (for example, <code class=\"language-malloy\">eventDate: <span class=\"token date\">@2003</span> <span class=\"token keyword\">to</span> <span class=\"token date\">@2004</span></code>) that will also check if the value is within the range.",
      "This is extremely useful with the <a href=\"apply.html\">Apply operator</a>, <code class=\"language-malloy\">:</code>. To see if two events happen in the same calendar year, for example, the boolean expression in Malloy is <code class=\"language-malloy\">oneEvent: otherEvent<span class=\"token punctuation\">.</span><span class=\"token timeframe\">year</span></code>"
    ],
    "path": "/language/time-ranges.md"
  },
  {
    "titles": [
      "Types"
    ],
    "paragraphs": [
      "All fields in Malloy have a type. Today, these types are\nmostly scalar, with a few notable exceptions."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Scalar Types"
    ],
    "paragraphs": [],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Scalar Types",
      "Numbers"
    ],
    "paragraphs": [
      "All numbers in Malloy are of type <code class=\"language-malloy\"><span class=\"token type\">number</span></code>, including BigQuery's <code>INTEGER</code>, <code>INT64</code>, <code>FLOAT</code>, and <code>FLOAT64</code> types.",
      "Literal <code class=\"language-malloy\"><span class=\"token type\">number</span></code>s consist of one or more digits optionally followed\nby a decimal point <code class=\"language-malloy\"><span class=\"token punctuation\">.</span></code> and more digits, e.g. <code class=\"language-malloy\"><span class=\"token number\">42</span></code> or <code class=\"language-malloy\"><span class=\"token number\">3.14</span></code>.",
      "Negative numbers are represented using the unary minus\noperator, e.g. <code class=\"language-malloy\"><span class=\"token operator\">-</span><span class=\"token number\">7</span></code>.",
      "Today, no other forms of literal numbers (e.g. numbers in other\nbases, numbers with thousand separators, exponential notation, etc.) are legal."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Scalar Types",
      "Strings"
    ],
    "paragraphs": [
      "In Malloy, strings of any length are represented by the <code class=\"language-malloy\"><span class=\"token type\">string</span></code> type.",
      "Literal strings in Malloy are enclosed in single quotes <code class=\"language-malloy\">'</code>, and may include the escape sequences <code class=\"language-malloy\">\\\\</code> or <code class=\"language-malloy\">\\<span class=\"token punctuation\">.</span></code>, e.g. <code class=\"language-malloy\"><span class=\"token string\">'\\'Hello, world\\''</span></code>."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Scalar Types",
      "Dates and Timestamps"
    ],
    "paragraphs": [
      "Malloy has two time types, <code class=\"language-malloy\"><span class=\"token type\">date</span></code> and <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code>."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Scalar Types",
      "Booleans"
    ],
    "paragraphs": [
      "The <code class=\"language-malloy\"><span class=\"token type\">boolean</span></code> type covers both the <code>BOOLEAN</code> and <code>BOOL</code> types from BigQuery.",
      "In Malloy, the boolean literals are written <code class=\"language-malloy\"><span class=\"token boolean\">true</span></code> and <code class=\"language-malloy\"><span class=\"token boolean\">false</span></code>."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Scalar Types",
      "Bytes"
    ],
    "paragraphs": [
      "Bytestrings are represented by the <code>bytes</code> type\nin Malloy.",
      "There is currently no syntax for specifying <code>bytes</code> literals or casting to the <code>bytes</code> type."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Intermediate Types"
    ],
    "paragraphs": [],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Intermediate Types",
      "Regular Expressions"
    ],
    "paragraphs": [
      "Literal regular expressions are enclosed in single quotation\nmarks <code class=\"language-malloy\">'</code> and preceded by either <code class=\"language-malloy\"><span class=\"token operator\">/</span></code> or <code class=\"language-malloy\">r</code>, e.g. <code class=\"language-malloy\"><span class=\"token regular_expression\">/'.*'</span></code> or <code class=\"language-malloy\"><span class=\"token regular_expression\">r'.*'</span></code>. Both syntaxes are semantically equivalent.",
      "In the future, the literal regular expressions will likely\nbe simply slash-enclosed, e.g <code>/.*/</code>."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Intermediate Types",
      "Ranges"
    ],
    "paragraphs": [
      "There are three types of ranges today: <code class=\"language-malloy\"><span class=\"token type\">string</span></code> ranges, <code class=\"language-malloy\"><span class=\"token type\">date</span></code> ranges, and <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code> ranges. The most basic ranges\nare of the form <code class=\"language-malloy\">start <span class=\"token keyword\">to</span> end</code> and represent the inclusive range between <code class=\"language-malloy\">start</code> and <code class=\"language-malloy\">end</code>, e.g. <code class=\"language-malloy\"><span class=\"token number\">10</span> <span class=\"token keyword\">to</span> <span class=\"token number\">20</span></code> or <code class=\"language-malloy\"><span class=\"token date\">@2004-01</span> <span class=\"token keyword\">to</span> <span class=\"token date\">@2005-05</span></code>.",
      "In the future, other ranges may be allowed, such as <code class=\"language-malloy\"><span class=\"token type\">string</span></code> ranges."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Intermediate Types",
      "Alternations and Partials"
    ],
    "paragraphs": [
      "Scalar values, regular expressions, and\nranges may also be used in alternations, in which case the\ncondition is assumed to be that of equality, matching, and\ninclusion respectively."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Types",
      "Nullability"
    ],
    "paragraphs": [
      "Today, all Malloy types include the value <code class=\"language-malloy\"><span class=\"token keyword\">null</span></code>, however\nin the future Malloy may have a concept of nullable vs.\nnon-nullable types.",
      "Both the <code class=\"language-malloy\"><span class=\"token type\">date</span></code> and <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code> types may have an associated\n<em>timeframe</em>, which can be <code class=\"language-malloy\"><span class=\"token timeframe\">year</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">quarter</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">month</span></code>,\n<code class=\"language-malloy\"><span class=\"token timeframe\">week</span></code>, or <code class=\"language-malloy\"><span class=\"token timeframe\">day</span></code>, and for <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code>s only, additionally\n<code class=\"language-malloy\"><span class=\"token timeframe\">hour</span></code>, <code class=\"language-malloy\"><span class=\"token timeframe\">minute</span></code>, or <code class=\"language-malloy\"><span class=\"token timeframe\">second</span></code>.",
      "Literals for <code class=\"language-malloy\"><span class=\"token type\">date</span></code> and <code class=\"language-malloy\"><span class=\"token type\">timestamp</span></code> are preceded by the <code class=\"language-malloy\"><span class=\"token date\">@</span></code> character, e.g. <code class=\"language-malloy\"><span class=\"token date\">@2003</span></code> or <code class=\"language-malloy\"><span class=\"token date\">@1983-11-23 10:00:10</span></code>. For all\nvariations of time literals and information about their interaction with comparison operators, see the <a href=\"time-ranges.html#literals\">Time Ranges</a> section.",
      "The following types are not assignable to fields, and are\ntherefore considered <em>intermediate types</em>, in that they are\nprimarily used to represent part of a computation that\nyields a regular scalar type, often <code class=\"language-malloy\"><span class=\"token type\">boolean</span></code>.",
      "Values of type <code class=\"language-malloy\"><span class=\"token type\">string</span></code> may be compared against regular\nexpressions using either the <a href=\"apply.html\">apply operator</a>,<code class=\"language-malloy\">name: <span class=\"token regular_expression\">r'c.*'</span></code> or the like operator, <code class=\"language-malloy\">name <span class=\"token operator\">~</span> <span class=\"token regular_expression\">r'c.*'</span></code>.",
      "Ranges may be used in conjunction with the <a href=\"apply.html\">apply operator</a> to test whether a value falls within a given range.",
      "<em>Partials</em> represent a \"part of\" a comparison.\nSpecifically, a partial is a comparison missing its\nleft-hand side, and represents the condition of the\ncomparison yielding <code class=\"language-malloy\"><span class=\"token boolean\">true</span></code> if a given value were to be\nfilled in for that missing left-hand side. For example, <code class=\"language-malloy\"><span class=\"token operator\">></span> <span class=\"token number\">10</span></code> is a partial that represents the condition \"is greater\nthan ten.\" Likewise, <code class=\"language-malloy\"><span class=\"token operator\">!=</span> <span class=\"token string\">'CA'</span></code> is a partial that represents the condition of not being equal to <code class=\"language-malloy\"><span class=\"token string\">'CA'</span></code>.",
      "<em>Alternations</em> are combinations of partials representing\neither the logical union (\"or\") or conjunction (\"and\") of\ntheir conditions. Alternations are represented using the\nunion alternation operator <code class=\"language-malloy\"><span class=\"token operator\">|</span></code> and the conjunction\nalternation operator <code class=\"language-malloy\"><span class=\"token operator\">&amp;</span></code>.",
      "For example, <code class=\"language-malloy\"><span class=\"token operator\">=</span> <span class=\"token string\">'CA'</span> <span class=\"token operator\">|</span> <span class=\"token operator\">=</span> <span class=\"token string\">'NY'</span></code> represents the condition of being equal to 'CA' or <em>alternatively</em> being equal to 'NY'. On the other hand, <code class=\"language-malloy\"><span class=\"token operator\">!=</span> <span class=\"token string\">'CA'</span> <span class=\"token operator\">&amp;</span> <span class=\"token operator\">!=</span> <span class=\"token string\">'NY'</span></code> represents the condition of being not equal to 'CA' <em>as well as</em> being not equal to 'NY'.",
      "For example, <code class=\"language-malloy\"><span class=\"token string\">'CA'</span> <span class=\"token operator\">|</span> <span class=\"token regular_expression\">r'N.*'</span></code> represents the condition of being equal to 'CA' or starting with 'N', and <code class=\"language-malloy\"><span class=\"token number\">10</span> <span class=\"token keyword\">to</span> <span class=\"token number\">20</span> <span class=\"token operator\">|</span> <span class=\"token number\">20</span> <span class=\"token keyword\">to</span> <span class=\"token number\">30</span></code> represents the condition of being <em>either</em> between 10 and 20 <em>or</em> 20 and 30.",
      "Alternations and partials may be used in conjunction with the <a href=\"apply.html\">apply operator</a> to test whether a value meets the given condition."
    ],
    "path": "/language/types.md"
  },
  {
    "titles": [
      "Cohort Analysis"
    ],
    "paragraphs": [
      "To understand this, we're going to use Social Security Administrations birth/name data.",
      "We have a table with <code class=\"language-malloy\">name</code>, <code class=\"language-malloy\">gender</code>, <code class=\"language-malloy\"><span class=\"token identifier\">`year`</span></code>, <code class=\"language-malloy\">state</code> and the <code class=\"language-malloy\"><span class=\"token identifier\">`number`</span></code> of people born with those\ncharacteristics.",
      "We can see that in the population of the the people named 'Billie', the cohort of the Billies born in\nTexas makes up 18% of the total population of Billies.",
      "We could run this same query, but instead look by decade to see when the Billies where born.\nUsing the query below we can see that 26% of all Billies were born in the 1930s."
    ],
    "path": "/patterns/cohorts.md"
  },
  {
    "titles": [
      "Cohort Analysis",
      "Names as Cohorts"
    ],
    "paragraphs": [
      "One of the most powerful way of understanding what is happening using data is to use <em>cohort analysis</em>.\nFundamentally, cohort analysis is used to group people into sets and to analyze the success,\nattributes or characteristics of that group as compared to the population in general.",
      "In the simplest form, a cohort calculation is a <a href=\"percent_of_total.html\">percentage of total calculation</a>.\nFor example, if we were interested in the name 'Billie' as it relates to location. We could look\ncould filter on 'Billie' and look a states as it relates to total population.",
      "In the above example, the population was <em>People named Billie</em> and we used <em>state</em> or <em>year</em> for our cohort (grouping).\nLets flip it around and look at people born with a particular name as a cohort and the other attributes to limit our population.\nLet's limit our population to California in 1990 and look at the most cohorts (people with a given name).  We are also going\nto measure a little differently.  Instead of looking at a percentage, let's look at births per 100,000 people."
    ],
    "path": "/patterns/cohorts.md"
  },
  {
    "titles": [
      "Foreign Sums"
    ],
    "paragraphs": [
      "Malloy allows you to compute sums, averages correctly based on your join tree.  This example has flights, joining to aircraft, joining to aircraft_model.\n<code class=\"language-malloy\">aircraft_model</code> has the number of seats specified on this model of aircraft.  Code below computes sums and averages at various places in the join tree."
    ],
    "path": "/patterns/foreign_sums.md"
  },
  {
    "titles": [
      "Percent of Total"
    ],
    "paragraphs": [
      "In order to compute a percentage of total, you essentially have to run two queries, one for\nthe total and one where you wish to apply the calculation.  In Malloy, you can run these queries at\nat the same time and combine them.",
      "Let's suppose we wanted to look at our flight data by carrier and compute the percentage of all\nflight performed by a particular carrier."
    ],
    "path": "/patterns/percent_of_total.md"
  },
  {
    "titles": [
      "Percent of Total",
      "Query for all flights ever made"
    ],
    "paragraphs": [],
    "path": "/patterns/percent_of_total.md"
  },
  {
    "titles": [
      "Percent of Total",
      "Query for Flights By Carrier"
    ],
    "paragraphs": [
      "The results are returned as a single row in a table with two columns, <code class=\"language-malloy\">flight_count</code> and <code class=\"language-malloy\">main_query</code>.",
      "Using a pipeline with a <code class=\"language-malloy\"><span class=\"token keyword\">project</span></code> calculation to combine (essentially cross joining) the queries back into a single table.\nWe also add an additional column, the percentage of total calculation.",
      "We can use a wildcard against the nested query to to make this pattern easier to write."
    ],
    "path": "/patterns/percent_of_total.md"
  },
  {
    "titles": [
      "Percent of Total",
      "Use <em>project</em> to flatten the table and cross join"
    ],
    "paragraphs": [],
    "path": "/patterns/percent_of_total.md"
  },
  {
    "titles": [
      "Percent of Total",
      "Using a <em>wildcard</em> against the Nested Query"
    ],
    "paragraphs": [],
    "path": "/patterns/percent_of_total.md"
  },
  {
    "titles": [
      "Percent of Total",
      "In Malloy, can make both calculations at once with <a href=\"nesting.html\"><em>nested subtables</em></a>."
    ],
    "paragraphs": [],
    "path": "/patterns/percent_of_total.md"
  },
  {
    "titles": [
      "Pivot Limits"
    ],
    "paragraphs": [
      "Or really, limiting results based on secondary queries.",
      "Let's suppose we wanted to look flight data but only at only the top 5 carriers and only the top 5 destinations."
    ],
    "path": "/patterns/pivot_limits.md"
  },
  {
    "titles": [
      "Pivot Limits",
      "Carriers by destination produces 1958 rows"
    ],
    "paragraphs": [],
    "path": "/patterns/pivot_limits.md"
  },
  {
    "titles": [
      "Pivot Limits",
      "Query for the top 5 carriers"
    ],
    "paragraphs": [
      "Query to find the most interesting carriers."
    ],
    "path": "/patterns/pivot_limits.md"
  },
  {
    "titles": [
      "Pivot Limits",
      "Top 5 Destinations"
    ],
    "paragraphs": [],
    "path": "/patterns/pivot_limits.md"
  },
  {
    "titles": [
      "Pivot Limits",
      "Run all three queries together as Aggregating Subqueries."
    ],
    "paragraphs": [
      "Produces a table with a single row and three columns.  Each column essentially contains a table",
      "Project produces a cross join of the tables.  The filter essentially does an inner join, limiting the main queries results to\ndimensional values that are produce in the filtering queries."
    ],
    "path": "/patterns/pivot_limits.md"
  },
  {
    "titles": [
      "Pivot Limits",
      "Render the results as a pivot table"
    ],
    "paragraphs": [],
    "path": "/patterns/pivot_limits.md"
  },
  {
    "titles": [
      "Pivot Limits",
      "Project the main query and use the <em>top</em> nested queries to limit the results"
    ],
    "paragraphs": [],
    "path": "/patterns/pivot_limits.md"
  },
  {
    "titles": [
      "Sessionized Data"
    ],
    "paragraphs": [
      "Flight data contains time, carrier, origin, destination and the plane that made the flight (<code class=\"language-malloy\">tail_num</code>).  Take the\nflight data and sessionize it by carrier and date.  Compute statistics and the session, plane and flight level.\nRetain the original flight events."
    ],
    "path": "/patterns/sessionize.md"
  },
  {
    "titles": [
      "Year Over Year Analysis"
    ],
    "paragraphs": [
      "There are a couple of different ways to go about this in Malloy."
    ],
    "path": "/patterns/yoy.md"
  },
  {
    "titles": [
      "Year Over Year Analysis",
      "Method 1: Pivoting a Visualization"
    ],
    "paragraphs": [
      "Compare performance of different years on the same scale.  Line charts take the X-Axis, Y-Axis and Dimensional Axis as parameters.\nIn this Case, the X-Axis is <code class=\"language-malloy\">month_of_year</code>, the Y-Axis is <code class=\"language-malloy\">flight_count</code> and the Dimensional Axis is the year."
    ],
    "path": "/patterns/yoy.md"
  },
  {
    "titles": [
      "Year Over Year Analysis",
      "Method 2: Filtered Aggregates"
    ],
    "paragraphs": [
      "Filters make it easy to reuse aggregate calculations for trends analysis."
    ],
    "path": "/patterns/yoy.md"
  },
  {
    "titles": [
      "Year Over Year Analysis",
      "Method 2: Filtered Aggregates",
      "Using Relative Timeframes"
    ],
    "paragraphs": [],
    "path": "/patterns/yoy.md"
  },
  {
    "titles": [
      "Year Over Year Analysis",
      "Method 2: Filtered Aggregates",
      "Declaring and reusing common expressions"
    ],
    "paragraphs": [
      "We can rewrite the query so it is more reusable.  The declarations after the explore are temporary additions to this order_items table for the sake of just this query.",
      "Often you want to show up-to-date information.  You can write timeframes relatively so the queries always show\ncurrent data.  Read more about it in the <a href=\"filter_expressions.html\">filters</a> section."
    ],
    "path": "/patterns/yoy.md"
  },
  {
    "titles": [
      "Sample Models"
    ],
    "paragraphs": [
      "Code snippets will appear throughout the Malloy documentation, many of which rely on a number of sample models based on publicly available datasets."
    ],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "FAA"
    ],
    "paragraphs": [
      "This set of models points at a publicly available FAA flights dataset including information on flights, airports, aircrafts and aircraft models from 2000 to 2005. A wide variety of patterns and features are used in this model and any of our examples in documentation are based on this dataset, so it's a great place to start as you get to know Malloy."
    ],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "Iowa Liquor"
    ],
    "paragraphs": [],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "Ecommerce"
    ],
    "paragraphs": [
      "This model points to a dataset for a fictitious ecommerce business. It has a  clean and typical schema for a transactional dataset. It also includes an example of an interesting brand affinity analysis (people who buy x also buy y)."
    ],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "GA Sessions"
    ],
    "paragraphs": [
      "Malloy is ideally suited to working with nested data, and this is the place to see why. See how easily data at any level of nesting can be accessed and aggregated without needlessly complex queries or use of CTEs."
    ],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "Hacker News"
    ],
    "paragraphs": [],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "Names"
    ],
    "paragraphs": [
      "A look at baby names in the United States by gender, state, and year, since 1910. Includes an example of cohorting names by aggregating safely across different levels of nesting."
    ],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "The Met"
    ],
    "paragraphs": [
      "Looks at a catalog of over 200,000 public domain items from The Met (The Metropolitan Museum of Art). The catalog includes metadata about each piece of art, along with an image or images of the artifact."
    ],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Sample Models",
      "Wordlebot"
    ],
    "paragraphs": [
      "Liquor sales in Iowa are state-controlled, with all liquor wholesale run by the state. All purchases and sales of liquor that stores make are a matter of public record. A walkthrough of exploring and modeling this dataset can be found <a href=\"examples/iowa/iowa.html\">here</a>; this makes a great introduction to Malloy.",
      "This is just a fun dataset. Includes examples of using regular expressions to parse data, <a href=\"language/expressions#pick-expressions\">pick</a> (Malloy's improvement upon CASE statements), and <a href=\"language/imports.html\">imports</a> to spin off a specific analysis of posts about FAANG companies.",
      "Let Wordlebot solve Wordle for you (or if you're like us, see if it can beat you after you've played!). This is an example of an advanced analysis to solve a tricky problem. We have a walkthrough and examples of how we used the model to solve Wordle puzzles available <a href=\"examples/wordle/wordle.html\">here</a>."
    ],
    "path": "/samples.md"
  },
  {
    "titles": [
      "Bar Charts"
    ],
    "paragraphs": [],
    "path": "/visualizations/bar_charts.md"
  },
  {
    "titles": [
      "Bar Charts",
      "Two Measures"
    ],
    "paragraphs": [
      "This chart looks at flights and counts the number of aircraft owned by each carrier.  It also, using a gradient,\nshows the number of flights made per plane.",
      "Data Style"
    ],
    "path": "/visualizations/bar_charts.md"
  },
  {
    "titles": [
      "Bar Charts",
      "Two Dimensions"
    ],
    "paragraphs": [
      "In this case we are going to look at carriers by flight count and stack the destination.  We are only going to look at flights\nwith the destination SFO, OAK or SJC.",
      "Data Style",
      "We could flip the dimensions around and look at the airports' flights by carrier.",
      "There are two types of bar charts.  <em>Two measure bar charts</em> (gradient bar charts) and <em>Two Dimension Bar</em> Charts (stacked bar charts)."
    ],
    "path": "/visualizations/bar_charts.md"
  },
  {
    "titles": [
      "Line Charts"
    ],
    "paragraphs": [
      "Line charts take two or three parameters.",
      "First parameter -  X-axis is time field or numeric expression",
      "Second parameter - Y-axis is a numeric expression",
      "Third (optional) Pivot is dimensional field (numeric or string)",
      "Data Style is <code>'line_chart'</code>",
      "Style"
    ],
    "path": "/visualizations/charts_line_chart.md"
  },
  {
    "titles": [
      "Rendering Results"
    ],
    "paragraphs": [
      "Malloy, when running a query simply returns the data.  By default in the VSCode extension,\nthis data is shown as JSON.  Malloy includes a rendering library that can show this data in different ways.\nThe rendering library is a separate layer from Malloy's data access layer and using configuration an\nconvention to figure out how to show data.",
      "The rendering engine works by mapping at the names of the fields to a renderer.\nBy default nested queries are rendered in tables, but, for example the field name ends in '_bar_chart' it is rendered as a bar chart instead.",
      "This map can also be specified in a data styles file and included in the model."
    ],
    "path": "/visualizations/dashboards.md"
  },
  {
    "titles": [
      "Rendering Results",
      "Example Model"
    ],
    "paragraphs": [],
    "path": "/visualizations/dashboards.md"
  },
  {
    "titles": [
      "Rendering Results",
      "Results as JSON"
    ],
    "paragraphs": [
      "Pressing the run button, shows the results as JSON."
    ],
    "path": "/visualizations/dashboards.md"
  },
  {
    "titles": [
      "Rendering Results",
      "Render shows results as a Table"
    ],
    "paragraphs": [
      "By default, the renderer shows tabular results are rendered as tables."
    ],
    "path": "/visualizations/dashboards.md"
  },
  {
    "titles": [
      "Rendering Results",
      "Render shows results as a Dashboard"
    ],
    "paragraphs": [
      "Naming the field with '_dashboard' is a quick way of telling the renderer to show the results as a dashboard.  You can also do this\nby tying the field name to a renderer in the styles file."
    ],
    "path": "/visualizations/dashboards.md"
  },
  {
    "titles": [
      "Rendering Results",
      "Charting."
    ],
    "paragraphs": [
      "Add styles for <code class=\"language-malloy\">by_fac_type</code> and <code class=\"language-malloy\">by_county</code>",
      "Data Style:",
      "The Malloy Renderer uses <a href=\"https://vega.github.io/vega-lite/\">Vega</a> for charting.  Including some style information (that gets returned with the results) allows the renderer to\nstyle nested queries using charts and more."
    ],
    "path": "/visualizations/dashboards.md"
  },
  {
    "titles": [
      "Scatter Charts"
    ],
    "paragraphs": [
      "Scatter charts compare two numeric values. The data styles for the subsequent examples is:"
    ],
    "path": "/visualizations/scatter_charts.md"
  },
  {
    "titles": [
      "Scatter Charts",
      "Run as a nested subtable"
    ],
    "paragraphs": [],
    "path": "/visualizations/scatter_charts.md"
  },
  {
    "titles": [
      "Scatter Charts",
      "Run as a trellis"
    ],
    "paragraphs": [],
    "path": "/visualizations/scatter_charts.md"
  },
  {
    "titles": [
      "Segment Maps"
    ],
    "paragraphs": [
      "The plugin currently supports US maps. Segment maps take as input 4 columns: start latitude , start longitude, end latitude, and  end longitude of the segment.  The model and data styles for the subsequent examples are:",
      "and data styles are"
    ],
    "path": "/visualizations/segment_maps.md"
  },
  {
    "titles": [
      "Segment Maps",
      "Run as a simple query"
    ],
    "paragraphs": [
      "Departing from Chicago"
    ],
    "path": "/visualizations/segment_maps.md"
  },
  {
    "titles": [
      "Segment Maps",
      "Run as a trellis"
    ],
    "paragraphs": [
      "By calling the configured map as a nested query, a trellis is formed."
    ],
    "path": "/visualizations/segment_maps.md"
  },
  {
    "titles": [
      "Segment Maps",
      "Run as a trellis, repeated with different filters"
    ],
    "paragraphs": [],
    "path": "/visualizations/segment_maps.md"
  },
  {
    "titles": [
      "Shape Maps"
    ],
    "paragraphs": [
      "The plugin currently supports US maps and state names. The model and data styles for the subsequent examples are:",
      "Data Styles"
    ],
    "path": "/visualizations/shape_maps.md"
  },
  {
    "titles": [
      "Shape Maps",
      "Run as a simple query"
    ],
    "paragraphs": [],
    "path": "/visualizations/shape_maps.md"
  },
  {
    "titles": [
      "Shape Maps",
      "Run as a trellis"
    ],
    "paragraphs": [
      "By calling the configured map as a nested subtable, a trellis is formed."
    ],
    "path": "/visualizations/shape_maps.md"
  },
  {
    "titles": [
      "Shape Maps",
      "Run as a trellis, repeated with different filters"
    ],
    "paragraphs": [],
    "path": "/visualizations/shape_maps.md"
  }
]
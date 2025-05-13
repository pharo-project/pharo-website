{
"title": "[ANN] P3, a modern, lean and mean PostgreSQL client for Pharo",
"layout": "blogpost",
"publishDate": "2017-06-29"
}

P3 is a modern, lean and mean PostgreSQL client for Pharo.

P3Client uses frontend/backend protocol 3.0 \(PostgreSQL version 7.4 \[2003\] and later\), implementing the simple query cycle. It supports plaintext and md5 password authentication as well as SSL connections. When SQL queries return row data, incoming data is efficiently converted to objects. P3Client supports most common PostgreSQL types.

With P3DatabaseDriver, an interface between Glorp, an advanced object-relational mapper, and P3Client, most Glorp unit tests pass \(the same number as the older, proven PostgresV2 driver, that is using the legacy 2.0 protocol\). This was the initial design goal.

More info, usage examples and code at [https://github.com/svenvc/P3](https://github.com/svenvc/P3)

P3 is written in pure Pharo, using a TCP network connection to PostgreSQL.

This is an alpha release for the brave of heart that needs more real world testing before it is ready for general release.


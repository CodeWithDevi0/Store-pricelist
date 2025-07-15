<?php
// Set CORS headers to allow requests from your frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$products = array(
    array(
        'product_name' => 'Fudgee bar',
        'product_price' => 10
    ),
    array(
        'product_name' => 'Rebisco',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Skyflakes',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Fita',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Hansel non/flavored',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Rebisco flavored',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Skyflakes flavored',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Fita flavored',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Marie',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Fruitees',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Valmer',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Magic crackers',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Magic small',
        'product_price' => 4
    ),
    array(
        'product_name' => 'Topps',
        'product_price' => 10
    ),
    array(
        'product_name' => 'Doowee choco',
        'product_price' => 13
    ),
    array(
        'product_name' => 'Pillows',
        'product_price' => 10
    ),
    array(
        'product_name' => 'Whoopie',
        'product_price' => 13
    ),
    array(
        'product_name' => 'Sumo',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Combi',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Calcheese',
        'product_price' => 15
    ),
    array(
        'product_name' => 'Calcheese M',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Calcheese S',
        'product_price' => 3
    ),
    array(
        'product_name' => 'Bravo',
        'product_price' => 7
    ),
    array(
        'product_name' => 'Cupp Keyk',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Yahoo',
        'product_price' => 6
    ),
    array(
        'product_name' => 'Eggnog',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Kukis butter',
        'product_price' => 15
    ),
    array(
        'product_name' => 'Bingo',
        'product_price' => 8
    ),
    array(
        'product_name' => 'Dewberry',
        'product_price' => 8
    )
);

// Output JSON
echo json_encode($products);
?> 
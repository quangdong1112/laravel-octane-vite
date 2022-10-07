<?php

namespace Tests\Unit;

use mysql_xdevapi\Exception;
use PHPUnit\Framework\TestCase;
use App\Http\Controllers\Controller;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     * @dataProvider provider_test_result_sum_function
     * @return void
     */

//    public function test_that_true_is_true()
//    {
//        $this->assertTrue(true);
//    }
//
//    public function test_result_sum_is_numeric()
//    {
//        $a = 1;
//        $b = 2;
//        $sum = new Controller();
//        $result = $sum->sum($a, $b);
//        $this->assertIsNumeric($result);
//    }

    public function test_result_sum_function($a, $b)
    {
        $sum = new Controller();
        $result = $sum->sum($a, $b);
        if (!is_numeric($a) || !is_numeric($b)) {
            $this->assertFalse($result);
        } else {
            $this->assertIsNumeric($result);

        }
    }

    public function provider_test_result_sum_function()
    {
        return array(
            ['z', 'x'],
            ['sd', '1'],
            ['1', 'a'],
            ['', '1'],
            ['"1"', '1'],
            [2, '1'],
            [false, '1'],
            [2, null],
        );
    }

}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var Checkout_style_1 = require("./Checkout.style");
function CheckOut() {
    return (<Box_1.Box display="flex">
      <Box_1.Box border="1px solid #5ECE7B" m="0 auto" width="500px" height="500px" borderRadius="50%" textAlign="center">
        <Checkout_style_1.CheckOutTitle>Thank you! </Checkout_style_1.CheckOutTitle>
        <Checkout_style_1.CheckOutText>for your order</Checkout_style_1.CheckOutText>
      </Box_1.Box>
    </Box_1.Box>);
}
exports.default = CheckOut;

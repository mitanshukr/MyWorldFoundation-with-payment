<?php
	header("Pragma: no-cache");
	header("Cache-Control: no-cache");
	header("Expires: 0");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <title>Merchant Check Out Page</title>
    <meta name="GENERATOR" content="Evrsoft First Page">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <style>
    input {
        width: 100%;
        outline: none;
    }
    </style>
</head>

<body>
    <div style="text-align:center;margin:0 auto" class="pt-5">
        <h1>Check Out Page</h1>
        <pre>
	</pre>
        <form method="post" action="pgRedirect.php">
            <table border="0" align="center" style="border-collapse:separate;border-spacing: 0 5px; width: 30%">
                <tbody>
                    <tr>
                        <td><label>ORDER_ID:* </label></td>
                        <td><input id="ORDER_ID" tabindex="1" maxlength="20" size="20" name="ORDER_ID"
                                autocomplete="off" value="<?php echo  "ORDS" . rand(10000,99999999)?>" readonly>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Name:* </label></td>
                        <td><input title="PAYEE_NAME" tabindex="10" type="text" name="PAYEE_NAME"
                                placeholder="Your Full Name" required>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Email Id:* </label></td>
                        <td><input title="PAYEE_EMAIL" tabindex="10" type="email" name="PAYEE_EMAIL"
                                placeholder="Your email address" required>
                        </td>
                    </tr>
                    <tr class="d-none">
                        <td>2</td>
                        <td><label>CUSTID:* </label></td>
                        <td><input id="CUST_ID" tabindex="2" maxlength="12" size="12" name="CUST_ID" autocomplete="off"
                                value="CUST001"></td>
                    </tr>
                    <tr class="d-none">
                        <td>3</td>
                        <td><label>INDUSTRY_TYPE_ID:* </label></td>
                        <td><input id="INDUSTRY_TYPE_ID" tabindex="4" maxlength="12" size="12" name="INDUSTRY_TYPE_ID"
                                autocomplete="off" value="Retail"></td>
                    </tr>
                    <tr class="d-none">
                        <td>4</td>
                        <td><label>Channel:* </label></td>
                        <td><input id="CHANNEL_ID" tabindex="4" maxlength="12" size="12" name="CHANNEL_ID"
                                autocomplete="off" value="WEB">
                        </td>
                    </tr>
                    <tr>
                        <td><label>Amount:* </label></td>
                        <td><input title="TXN_AMOUNT" tabindex="10" type="text" name="TXN_AMOUNT" placeholder="5000"
                                required>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input class="btn btn-success btn-block" value="CheckOut" type="submit" onclick=""></td>
                    </tr>
                </tbody>
            </table>
            * - Mandatory Fields
        </form>
    </div>

</body>

</html>
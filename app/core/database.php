<?php
class db
{
    private static $conn;
    private static $PDO;
    function __construct()
    {
        try {
            self::$PDO = new PDO("mysql:host=" . HOST . ";dbname=" . DB_NAME, USER, PASS);
            self::$PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$PDO->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        } catch (PDOException $e) {
            print_r($e->getMessage());
        }
    }

    public static function get_instance()
    {
        if (!isset(self::$conn)) {
            self::$conn = new db();
        }
        return self::$conn;
    }
    public function read(string $query, array $data = [], bool $returnResults = false, bool $rowCount = true)
    {
        /**
         * Read Function
         * 
         * @param string $query -> is the query string that we use to search
         * 
         * @param array  $data  -> Data we want to pass
         * 
         * @return array #result-> Fetched Data or rowCount
         */
        $results = [];

        $stmt = self::$PDO->prepare($query);
        $stmt->execute($data);

        if ($returnResults)
            $results[] = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($rowCount)
            $results[] = $stmt->rowCount();

        return $results;
    }
    public function write(string $query, array $data = [])
    {
        /**
         * Write Function is used to modify columns or add data to our tables
         * 
         * @param string $query -> is the query string that we use to search
         * 
         * @param Array  $data  -> Data we want to pass
         */

        $stmt = self::$PDO->prepare($query);
        $stmt->execute($data);
    }
}

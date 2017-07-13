<?php

class DB
{
    public $link;
    const DB_HOST = 'localhost';
    const DB_USER = 'id2234266_ajaxhint';
    const DB_PASSWORD = 'maxvell';
    const DB_NAME = 'id2234266_ajax';

    public function __construct()
    {
        $this->link = new mysqli(self::DB_HOST, self::DB_USER, self::DB_PASSWORD, self::DB_NAME);
    }

    public function find($sql)
    {
        return $query = $this->link->query($sql);
    }
}
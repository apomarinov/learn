<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Collection extends Model
{
    protected $collection = 'collection';
    protected $appends = ['id'];
    protected $hidden = ['_id'];
//    protected $with = ['books'];

    public function books()
    {
        return $this->hasMany(Book::class);
    }

}

<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Word extends Model
{
    protected $collection = 'word';
    protected $appends = ['id'];
    protected $hidden = ['_id'];

}

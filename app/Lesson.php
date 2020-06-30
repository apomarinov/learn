<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Lesson extends Model
{
    protected $collection = 'lesson';
    protected $appends = ['id'];
    protected $hidden = ['_id'];
}

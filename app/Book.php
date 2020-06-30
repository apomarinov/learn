<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Book extends Model
{
    protected $collection = 'book';
    protected $appends = ['id'];
    protected $hidden = ['_id'];
    protected $with = ['lessons'];

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}

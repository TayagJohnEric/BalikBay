<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReportImage extends Model
{
    protected $table = 'report_images';

    public function itemReport()
{
    return $this->belongsTo(ItemReport::class);
}
}

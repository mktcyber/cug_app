@extends('layouts.app')

@section('content')

<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-body table-responsive">
            <router-view name="employeeIndex"></router-view>
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>

@endsection 
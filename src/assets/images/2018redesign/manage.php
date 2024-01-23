<div class="container headerblue"><div class="inlinediv"><h1 class="title">View All Classes</h1></div>
<div class="topbuttonwrapper classoverview">
	<a href="/classroom/add/" class="ghosthover addbtn">Add a Class</a>
	<a href="javascript:history.go(-1)" class="ghosthover backbtn">Back</a>
</div>
</div>
<div class="container">
<!-- Quick Links -->
<?php	if (!Yii::app()->user->isSales): ?>

<?php endif ?>
<?php	if (Yii::app()->user->isAdmin || Yii::app()->user->isSupportAdmin || Yii::app()->user->isOrganizationAdmin || Yii::app()->user->isSchoolAdmin): ?>
	<?php echo CHtml::link("View Users", array('/user/admin')); ?>
<?php endif ?>
<?php
if (Yii::app()->user->getState('isAdmin') || Yii::app()->user->getState('isSupportAdmin') || Yii::app()->user->getState('isOrganizationAdmin') || Yii::app()->user->getState('isSchoolAdmin')){
	$this->pageTitle='View Classes';
	//$this->introText="<p>Click on the class name to view more details or select reports to view. Note children must be assigned to a class in order to use the iStartSmart program.  Click on the Quick Task to assign children to a class. Class names should represent the classroom or children group and should not include teacher's names. The maximum number of children in any class is ".Yii::app()->params['maxChildrenForClass'].". The maximum classes on any one device is ".Yii::app()->params['maxClassesForDevice'].".</p>";
}else{
	$this->pageTitle='View my Classes';
	//$this->introText="<p>Click on the class name to view more details or select reports to view. Note children must be assigned to a class in order to use the iStartSmart program.  Click on the Quick Task to assign children to a class. Class names should represent the classroom or children group and should not include teacher's names. The maximum number of children in any class is ".Yii::app()->params['maxChildrenForClass'].". The maximum classes on any one device is ".Yii::app()->params['maxClassesForDevice'].".</p>";
}
	$this->introText='<p>To view more classroom details click on the classroom name you would like to view. Children must be assigned to a class in order to use the Shell Squad Games.<br><br> To assign children to a class click the \'Assign Children to Classes\' button under the \'Quick Tasks\' section. Class names should represent the classroom or group of children. The maximum number of children in a given class is 30. (For example, a class called "AM-Class" can have a maximum of 30 children and a class called "PM-Class" can have a maximum of 30 children). The maximum number of classes on any one device is four.</p>';

Yii::app()->clientScript->registerScript('add', "
$('#add-button').click(function(){
	window.location.href = '".CController::createUrl('classroom/add')."';
	return false;
	});
$('#content h3:not(.grid-header,.underlined)').hide();
	
");
?>

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>
<fieldset class="fullwidth">
		<?php if (Yii::app()->user->isSales || 
		          Yii::app()->user->isCIC || 
		          Yii::app()->user->isAdmin || 
		          Yii::app()->user->isSupportAdmin ||
		          Yii::app()->user->isCustomerSuccessAdmin){ ?>
				<div class="reportfilter"><strong>Org: </strong>
						<div class="styled-select thinselectgray">
			
			<?php echo $form->dropDownList($model,'class_organization_id',CHtml::listData(Organization::model()->active()->ordered()->findAll(),'id','name'),array('empty' => 'Select an Organization',
					'ajax' => array(
						'type'=>'POST', //request type
						'url'=>CController::createUrl('classroom/dynamicschools'), //url to call.
						'success'=>'function(data) {
										$("#'.CHtml::activeId($model,'class_school_id').'").html(data);
										$.fn.yiiGridView.update("classroom-grid", {
											data: $("#filter-form form").serialize()
										});
									}'
					))); ?>
		</div></div>
		<div class="reportfilter"><strong>School: </strong>
				<div class="styled-select thinselectgray">
			<?php echo $form->dropDownList($model,'class_school_id',($model->class_organization_id) ? CHtml::listData(School::model()->active()->ordered()->findAll('parent_id=:parent_id', 
                                array(':parent_id'=>$model->class_organization_id)),'id','name') : array(),array('empty' => 'Select a School',
                                'onchange'=>'                                        
                                        $.fn.yiiGridView.update("classroom-grid", {
                                                data: $("#filter-form form").serialize()
                                        });
                                '
                        )); ?>                    
		</div></div>
		<?php }  else if (Yii::app()->user->isOrganizationAdmin || Yii::app()->user->isSchoolAdmin){ ?>
		<div class="reportfilter"><strong>School: </strong>
						<div class="styled-select thinselectgray">
                        <?php echo $form->dropDownList($model,'class_school_id', CHtml::listData(School::model()->active()->managed()->ordered()->findAll(),'id','name'), array('empty' => 'Select a School',
                                'onchange'=>'
                                    $.ajax({
                                        type:\'POST\',
                                        url:\''.CController::createUrl("classroom/set_filter_school_id").'\',
                                        dataType:\'json\',
                                        data: \'school_id=\'+$(this).val(),
                                        success:function(data) {

                                        }
                                    });                                    
                                    $.fn.yiiGridView.update("classroom-grid", {
                                            data: $("#filter-form form").serialize()
                                    });
                                '
                        )); ?>
			</div>
		<?php } ?>	
<?php if (Yii::app()->user->isAdmin || Yii::app()->user->isSupportAdmin || Yii::app()->user->isOrganizationAdmin || Yii::app()->user->isSchoolAdmin||Yii::app()->user->getState('isExecutiveReportViewer')||Yii::app()->user->getState('isHatchReportViewer')){ ?>
		<div class="reportfilter"><strong>Classroom Type: </strong>
						<div class="styled-select thinselectgray">
					<?php echo $form->dropDownList($model,'classroom_type_id', CHtml::listData(ClassroomType::model()->ordered()->findAll(),'id','name'),array('empty' => 'Select a Classroom Type',
						'onchange'=>'
                                                    $.fn.yiiGridView.update("classroom-grid", {
                                                            data: $("#filter-form form").serialize()
                                                    });
                                                '
					)); ?>
			</div></div>
<?php } ?>
			<div class="reportfilter"><strong>Status: </strong>
						<div class="styled-select thinselectgray">
				<?php echo $form->dropDownList($model,'is_active',array('1'=>'Active','0'=>'Inactive'),array(
						'onchange'=>'
										$.fn.yiiGridView.update("classroom-grid", {
											data: $("#filter-form form").serialize()
										});
									'
					)); ?>
				</div></div>
</fieldset>
<?php $this->endWidget(); ?>
    
<?php 
if(Yii::app()->user->getState('isSales') ||
        Yii::app()->user->getState('isOperationsAdmin') ||
		Yii::app()->user->getState('isLicenseAdmin') ||
		Yii::app()->user->getState('isBuildroomAdmin') ||
        Yii::app()->user->getState('isRepairsAdmin') ||
        Yii::app()->user->getState('isMarketingAdmin') ||
        Yii::app()->user->getState('isCIC') ||
		Yii::app()->user->getState('isSupportAdmin') ||
		Yii::app()->user->getState('isAdmin') ||
		Yii::app()->user->getState('isReplacementAdmin') ||
        Yii::app()->user->getState('isCustomerSuccessAdmin')){
	$provider = $model->with('teacher','deviceCount','childCount','type')->search();
}
else if ($scope == 'noTeacher'){
    $provider = $model->managed()->with('noTeacher','hasDevice','teacher','deviceCount','childCount','type')->search();
} else {
    $provider = $model->managed()->with('teacher','deviceCount','childCount','type')->search();
}

$provider->pagination->pageSize=Yii::app()->params['pageSize'];
//$provider->sort->defaultOrder = array('name'=>false);
$provider->sort->defaultOrder = $this->getDefaultOrder('Classroom',array('name'=>false));

    if (Yii::app()->user->isSales || Yii::app()->user->isCustomerSuccessAdmin)
    {
        $displayValue = 'CHtml::encode($data->name)';
    }
    else 
    {
        $displayValue = 'CHtml::link(CHtml::encode($data->name),array("/classroom/info/", "id"=>$data->id),array("title"=>"View"))';        
    }
    
$this->widget('zii.widgets.grid.CGridView', array(
	'id'=>'classroom-grid',
	'itemsCssClass'=>'alternating fullwidth device-table',
	'dataProvider'=>$provider,
	'pager'=>array('class'=>'AjaxList'),
	'summaryCssClass' => 'hidden',
	//'filter'=>$model,
	'columns'=>array(
		array(
			'name'=>'name',
			'type' => 'raw', 
			'htmlOptions'=>array('style'=>''),   
			'value' => $displayValue,        
		),
		array(
            'header'=>'Teacher',
            'type' => 'raw',     
			'htmlOptions'=>array('style'=>''),                        
			'visible' => ((Yii::app()->user->getState('same_view') != 1) && (Yii::app()->user->getState('isAdmin') || Yii::app()->user->getState('isSupportAdmin') || Yii::app()->user->getState('isOrganizationAdmin') || Yii::app()->user->getState('isSchoolAdmin'))),                        
               'value'=>'CHtml::dropDownList("ddc_".$data->id, $data->teacher["id"], CHtml::listData(School::getTeachers($data->class_school_id), "id", "full_name"), array("style"=>"","class"=>"classAdminTeacher", "empty" => "Select a Teacher",
               "rel" =>$data->teacher["id"],
               "onchange"=>"$.ajax({
                       type:\'POST\',
                       url:\''.CController::createUrl("classroom/assign_teacher").'\',
                       dataType:\'json\',
                       data: \'classroom_id=$data->id&teacher_id=\'+$(this).val()+\'&prev_teacher_id=\'+$(this).attr(\'rel\'),
                       success:function(data) {
                           if (data.error){
                               rms_alert(data.error);
                               $(\'#ddc_$data->id\').val(data.classroom);
                           } else {
                               if (data.Status == 0) {
                                   alert(\'Error: \' + data.Message);
                               } else {
                                   //alert(\'good\');
                               }
                           }
                       }
                   });")
               );',
        ),  
        array(
            'header'=>'Teacher',    
			'htmlOptions'=>array('style'=>'text-align:center;'),                        
			'visible' => (Yii::app()->user->getState('same_view') == 1 || (!Yii::app()->user->getState('isAdmin') && !Yii::app()->user->getState('isSupportAdmin') && !Yii::app()->user->getState('isOrganizationAdmin') && !Yii::app()->user->getState('isSchoolAdmin'))),                        
            'value'=>'$data->teacher[full_name]',
        ),                
 
        array(
			'name'=>'childCount',
			'htmlOptions'=>array('style'=>'text-align:center;','class'=>'grid-num'),
        ),
		array(
			'name'=>'deviceCount',
            'header'=>'Devices',
			'htmlOptions'=>array('style'=>'text-align:center;','class'=>'grid-num'),
		),
		array(
			'name'=>'is_active',
			'type'=>'image',
			'value'=>'$data->is_active ? Yii::app()->request->baseUrl."/images/iconstatusenabled.gif" : Yii::app()->request->baseUrl."/images/spacer.gif"',
			'htmlOptions'=>array('class'=>'grid-active'),
			'visible'=>false,
		),
		array(
			'name'=>'classroom_type_id',
                        'header'=>'Classroom Type',
			'value' => 'CHtml::encode($data->type["name"])',
			'visible' => (true || Yii::app()->user->getState('isAdmin') || Yii::app()->user->getState('isSupportAdmin') || Yii::app()->user->getState('isOrganizationAdmin') || Yii::app()->user->getState('isSchoolAdmin') || Yii::app()->user->getState('isTeacher'))
		), 
		array(
			'header'=>'Edit',
			'class'=>'CButtonColumn',
			'template' => '{update}',
			'visible' => Yii::app()->user->isAdmin || 
			             Yii::app()->user->isSupportAdmin || 
			             Yii::app()->user->isCIC || 
			             Yii::app()->user->isOrganizationAdmin || 
			             Yii::app()->user->isSchoolAdmin || 
						 Yii::app()->user->isTeacher,
			'buttons'  => array('update'),
			'updateButtonUrl'=>'Yii::app()->createUrl("/classroom/edit", array("id" =>  $data["id"]))',
			'updateButtonImageUrl' => Yii::app()->request->baseUrl."/images/2018redesign/icon-edit.png",
			'updateButtonLabel' => 'Edit', 
		),
	),
)); ?>

</div>
</div>
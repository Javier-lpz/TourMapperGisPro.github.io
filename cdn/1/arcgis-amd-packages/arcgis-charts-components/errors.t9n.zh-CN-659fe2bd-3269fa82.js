/*! For license information please see errors.t9n.zh-CN-659fe2bd-3269fa82.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const t="加载图表时出错。",i="此图表共有 ${ elementCount } 个条柱。 具有一个系列的条形图仅限于 ${ totalLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",a="具有两个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",n="具有三个或更多个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",o="柱状图被限制为 ${ seriesLimit } 个系列。 选择唯一值较少的分割字段",r="创建图表时出错。",s="无法向负值或零值应用对数变换。",m="无法向负值应用平方根变换。",u="加载图层时出错。 URL = ${ url }。 门户项目 ID = ${ portalItemId }。",d="${ dataPath } 必须唯一。 名为 ${ seriesName } 的系列具有一个 ID (${ seriesID })，此 ID 已被另一个系列使用。",l="${ dataPath } 无法在非数值字段上执行非计数聚合。",C="${ dataPath } 缺少名为 ${ missingProperty } 的属性。",L="${ dataPath } 不应短于 ${ limit } 个字符。",$="${ dataPath } 包含的项目数量不应少于 ${ limit } 个。",c="${ dataPath } 包含的项目数量不应多于 ${ limit } 个。",x="${ dataPath } 必须至少包含一个空白字符。",E="${ dataPath } 不能有 ${ additionalProperty }。",S="${ dataPath } 必须等于以下允许值之一：${ allowedValues }。",h="${ dataPath } 必须与下列各项之一的方案匹配：${ schemaOptions }。",P="包含比例符号的散点图不受支持。 已应用默认符号大小。",g="无法读取输入数据。",p="直方图至少需要两个数字值。",I="索引 ${ seriesIndex } 处的预期系列类型是 '${ expectedType }'，但接受的是 '${ receivedType }'",y="确保所选数值字段的总和返回所有正值或所有负值。",v="此图表共有 ${ sliceCount } 个切片。 饼图的切片数限制为 ${ totalLimit }。 选择具有较少唯一值的“类别”字段，添加较少“数值”字段，或对数据应用过滤器。",f="基于要素的仪表仅限于 ${ totalLimit } 个要素。 过滤数据。",b="此图表中共有 ${ elementCount } 个标记。 具有一个系列的折线图仅限 ${ totalLimit } 个标记。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",q="具有两个系列的折线图仅限 ${ totalLimit } 个标记或每个系列限 ${ seriesLimit } 个标记。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",B="具有三个或更多系列的折线图仅限 ${ totalLimit } 个标记或每个系列限 ${ seriesLimit } 个标记。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",V="折线图被限制为 ${ seriesLimit } 个系列。 选择唯一值较少的分割字段",D="该图表中共有 ${ elementCount } 个方框。 具有一个系列的箱形图仅限 ${ totalLimit } 个箱形。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",w="包含两个系列的箱线图仅限于 ${ totalLimit } 个箱形，或每个系列 ${ seriesLimit } 个箱形。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",F="具有三个或更多个系列的箱形图仅限于 ${ totalLimit } 个箱形或每个系列 ${ seriesLimit } 个箱形。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",T="箱形图仅限 ${ seriesLimit } 个系列。 选择唯一值较少的分割字段",O="箱形图最多只能显示 ${ totalLimit } 个离群点。 过滤数据。";var N={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:n,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:r,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:u,duplicateSeriesID:d,nonNumericAggregation:l,requiredProperty:C,minLength:L,minItems:$,maxItems:c,whiteSpacePattern:x,additionalProperty:E,enumValues:S,anyOfValues:h,bubbleChartValidateMsg:P,queryError:g,histogramEmptyField:p,invalidSeriesType:I,or:"或",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:y,pieChartSlicesCannotExceedLimit:v,gaugeCannotExceedLimit:f,uniqueSeriesLineCountCannotExceedLimit:b,twoSeriesLineCountCannotExceedLimit:q,threePlusSeriesLineCountCannotExceedLimit:B,lineSeriesCountCannotExceedLimit:V,uniqueSeriesBoxCountCannotExceedLimit:D,twoSeriesBoxCountCannotExceedLimit:w,threePlusBoxLineCountCannotExceedLimit:F,boxSeriesCountCannotExceedLimit:T,boxSeriesOutlierCannotExceedLimit:O};e.additionalProperty=E,e.anyOfValues=h,e.barSeriesCountCannotExceedLimit=o,e.boxSeriesCountCannotExceedLimit=T,e.boxSeriesOutlierCannotExceedLimit=O,e.bubbleChartValidateMsg=P,e.default=N,e.defaultError=t,e.defaultInvalidChart=r,e.duplicateSeriesID=d,e.enumValues=S,e.gaugeCannotExceedLimit=f,e.histogramEmptyField=p,e.invalidSeriesType=I,e.layerLoadFailure=u,e.lineSeriesCountCannotExceedLimit=V,e.maxItems=c,e.minItems=$,e.minLength=L,e.negativeValueInDataForLogTransformation=s,e.negativeValueInDataForSqrtTransformation=m,e.nonNumericAggregation=l,e.or="或",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=y,e.pieChartSlicesCannotExceedLimit=v,e.queryError=g,e.requiredProperty=C,e.threePlusBoxLineCountCannotExceedLimit=F,e.threePlusSeriesBarCountCannotExceedLimit=n,e.threePlusSeriesLineCountCannotExceedLimit=B,e.twoSeriesBarCountCannotExceedLimit=a,e.twoSeriesBoxCountCannotExceedLimit=w,e.twoSeriesLineCountCannotExceedLimit=q,e.uniqueSeriesBarCountCannotExceedLimit=i,e.uniqueSeriesBoxCountCannotExceedLimit=D,e.uniqueSeriesLineCountCannotExceedLimit=b,e.whiteSpacePattern=x}));
<?php
header("Access-Control-Allow-Origin: *");
require_once './request.php';
error_reporting(0);
$url = $_SERVER['REQUEST_URI'];
$fullUrl = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$wordpressApiUrl = 'https://www.baninab.com/wp/wp-json/wp/v2';
$siteName = '';
$siteNameFa = 'بانی ناب پردازش';
$siteNameEn = 'Baninab Pardazesh';
if (strpos($url, '/fa') !== false) {
$siteName = $siteNameFa;
} else {
    $siteName = $siteNameEn;
}
$title = $siteName;
$webSiteUrl = 'https://baninab.com';
$titleWithOutSiteName = $siteName;
$ogType = 'website';
$postPerPage = 4;
$descriptionLimit = 500;
$haveImage = false;
$inArticles = false;
$prevLinkNumber = 0;
$nextLinkNumber = 0;
$paginationLinkTaxonomy = '/';
$image;
$articleCategory = '';
$articlePublished = '';
$articleModified = '';
$articleTags = [];
$keywordsArr = [];
if (strpos($url, '/fa') !== false) {
    $keywordsArr = ['IoT', 'M2M', 'اینترنت اشیا', 'بانی ناب پردازش'];
    } else {
        $keywordsArr = ['IoT', 'M2M', 'internet of things', 'Baninab Pardazesh']; // TODO : en
    }
$keywords = implode(",", $keywordsArr);
$description = '';
$descriptionFa = 'شرکت بانی‌ناب پردازش(BNP) یک شرکت‌ پیشرو در حوزه فناوری‌های نوین (IoT و M2M) است';
$descriptionEn = 'Baninab is a leading company in IoT & M2M solutions';

if (strpos($url, '/fa') !== false) {
    $description = $descriptionFa;
    } else {
        $description = $descriptionEn;
    }
function httpRequest($requestUrl) {
    $request = new Request($requestUrl);
    $request->execute();
    if ($request->getHttpCode() === 200) {
        return $request->getResponse();
    } else {
        return false;
    }
}
if ($url === '/fa') {
    array_push($keywordsArr, 'خانه هوشمند', 'مدیریت هشدار', 'اینترنت اشیاء', 'اینترنت چیزها', 'مانیتورینگ');
    $keywords = implode(',', $keywordsArr);
    $title = "${siteName} | صفحه ی اصلی";
    $titleWithOutSiteName = "صفحه ی اصلی";
} else if ($url === '/en') {
    array_push($keywordsArr, 'Smart home', 'Alarm management', 'Internet of things', 'IoT', 'monitoring');
    $keywords = implode(',', $keywordsArr);
    $title = "${siteName} | Home Page";
    $titleWithOutSiteName = "Home Page";    
} else if ($url === '/fa/blog/' || $url === '/fa/blog' || strpos($url, 'fa/blog/page') !== false) {
    $title = "${siteName} | وبلاگ";
    $titleWithOutSiteName = "وبلاگ";
    if (!strpos($url, 'fa/blog/page')) {
        $getBlogPostsNextFirstPageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?page=2&per_page=4"));
        if (count($getBlogPostsNextFirstPageRequest) > 0 && count($getBlogPostsNextFirstPageRequest) <= $postPerPage) {
            $nextLinkNumber = 2;
            $prevLinkNumber = 0;
        } else {
            $nextLinkNumber = 0;
            $prevLinkNumber = 0;
        }
    } else {
        $thisBlogPageNumber = urldecode(explode('fa/blog/page/', $url)[1]);
        $thisNextBlogPageNumber = $thisBlogPageNumber + 1;
        $thisPrevBlogPageNumber = $thisBlogPageNumber - 1;
        if ($thisBlogPageNumber !== 1 && $thisPrevBlogPageNumber !== 0) {
            $getBlogPostsNextHavePageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?page=${thisNextBlogPageNumber}&per_page=4"));
            $nextLinkNumber = (count($getBlogPostsNextHavePageRequest) > 0 && count($getBlogPostsNextHavePageRequest) <= $postPerPage) ? $thisNextBlogPageNumber : 0;
            $getBlogPostsPrevHavePageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?page=${thisPrevBlogPageNumber}&per_page=4"));
            $prevLinkNumber = (count($getBlogPostsPrevHavePageRequest) > 0 && count($getBlogPostsPrevHavePageRequest) <= $postPerPage) ? $thisPrevBlogPageNumber : 0;
        } else {
            $nextLinkNumber = $thisNextBlogPageNumber;
        }
    }
} else if ($url === 'fa/404') {
    $title = "${siteName} | صفحه ی مورد نظر یافت نشد";
    $titleWithOutSiteName = "صفحه ی مورد نظر یافت نشد";
} else if ($url === 'en/404') {
    $title = "${siteName} | The page you were looking for has been moved or deleted";
    $titleWithOutSiteName = "The page you were looking for has been moved or deleted";
} else if (strpos($url, 'fa/blog/search') !== false) {
    $ogType = 'object';
    $searchQuery = urldecode(explode('/fa/blog/search/', $url)[1]);
    if (strpos($searchQuery, '/page/') !== false) {
        $searchQueryHavePage = explode('/page/', $searchQuery)[0];
        $title = "${siteName} | جستجو : ${searchQueryHavePage}";
        $titleWithOutSiteName = $searchQueryHavePage;

        $paginationLinkTaxonomy = "/search/${searchQueryHavePage}/";
        $thisBlogSearchPageNumber = urldecode(explode('page/', $url)[1]);
        $thisNextBlogSearchPageNumber = $thisBlogSearchPageNumber + 1;
        $thisPrevBlogSearchPageNumber = $thisBlogSearchPageNumber - 1;
        if ($thisBlogSearchPageNumber !== 1 && $thisPrevBlogSearchPageNumber !== 0) {
            $getBlogSearchNextHavePageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?search=${searchQueryHavePage}&page=${thisNextBlogSearchPageNumber}&per_page=4"));
            $nextLinkNumber = (count($getBlogSearchNextHavePageRequest) > 0 && count($getBlogSearchNextHavePageRequest) <= $postPerPage) ? $thisNextBlogSearchPageNumber : 0;
            $getBlogPostsPrevHavePageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?search=${searchQueryHavePage}&page=${thisPrevBlogSearchPageNumber}&per_page=4"));
            $prevLinkNumber = (count($getBlogPostsPrevHavePageRequest) > 0 && count($getBlogPostsPrevHavePageRequest) <= $postPerPage) ? $thisPrevBlogSearchPageNumber : 0;
        } else {
            $nextLinkNumber = $thisNextBlogSearchPageNumber;
        }

    } else {
        $title = "${siteName} | جستجو : ${searchQuery}";
        $titleWithOutSiteName = $searchQuery;
        $paginationLinkTaxonomy = "/search/${searchQuery}/";
        $getSearchPostsNextFirstPageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?search=${searchQuery}&page=2&per_page=4"));
        if (count($getSearchPostsNextFirstPageRequest) > 0 && count($getSearchPostsNextFirstPageRequest) <= $postPerPage) {
            $nextLinkNumber = 2;
            $prevLinkNumber = 0;
        } else {
            $nextLinkNumber = 0;
            $prevLinkNumber = 0;
        }

    }
} else if (strpos($url, 'fa/blog/category') !== false) {
    $ogType = 'object';
    $categoryQuery = urldecode(explode('/fa/blog/category/', $url)[1]);
    if (strpos($categoryQuery, '/page/') !== false) {
        $categoryQueryHavePage = explode('/page/', $categoryQuery)[0];
        $getCategoryNameHavePageRequest = json_decode(httpRequest("${wordpressApiUrl}/categories?slug=${categoryQueryHavePage}"));
        $categoryHaveName = $getCategoryNameHavePageRequest[0]->name;
        $title = "${siteName} | ${categoryHaveName}";
        $titleWithOutSiteName = $categoryHaveName;
        $paginationLinkTaxonomy = "/category/${categoryQueryHavePage}/";


        $thisCategoryPageNumber = explode("page/", $url)[1];
        $thisNextCategoryPageNumber = $thisCategoryPageNumber + 1;
        $thisPrevCategoryPageNumber = $thisCategoryPageNumber - 1;
        if ($thisCategoryPageNumber !== 1 && $thisPrevCategoryPageNumber !== 0) {
            $getCategoryPostsNextHavePageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?filter[category_name]=${categoryQueryHavePage}&page=${thisNextCategoryPageNumber}&per_page=4"));
            $nextLinkNumber = (count($getCategoryPostsNextHavePageRequest) > 0 && count($getCategoryPostsNextHavePageRequest) <= $postPerPage) ? $thisNextCategoryPageNumber : 0;
            $getCategoryPostsPrevHavePageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?filter[category_name]=${categoryQueryHavePage}&page=${thisPrevCategoryPageNumber}&per_page=4"));
            $prevLinkNumber = (count($getCategoryPostsPrevHavePageRequest) > 0 && count($getCategoryPostsPrevHavePageRequest) <= $postPerPage) ? $thisPrevCategoryPageNumber : 0;
        } else {
            $nextLinkNumber = $thisNextCategoryPageNumber;
        }


    } else {
        $getCategoryNameRequest = json_decode(httpRequest("${wordpressApiUrl}/categories?slug=${categoryQuery}"));
        $categoryName = $getCategoryNameRequest[0]->name;
        $title = "${siteName} | ${categoryName}";
        $titleWithOutSiteName = $categoryName;
        $paginationLinkTaxonomy = "/category/${categoryQuery}/";
        $getCategoryPostsNextFirstPageRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?filter[category_name]=${categoryQuery}&page=2&per_page=4"));
        if (count($getCategoryPostsNextFirstPageRequest) > 0 && count($getCategoryPostsNextFirstPageRequest) <= $postPerPage) {
            $nextLinkNumber = 2;
            $prevLinkNumber = 0;
        } else {
            $nextLinkNumber = 0;
            $prevLinkNumber = 0;
        }
    }
} else {
    if (explode('/', $url)[1] === 'blog') {
        $ogType = 'article';
        $haveImage = true;
        $inArticles = true;
        $blogPostSlug = urldecode(explode('/', $url)[2]);
        $getPostRequest = json_decode(httpRequest("${wordpressApiUrl}/posts?slug=${blogPostSlug}"));
        $articleTags = $getPostRequest[0]->post_tags;
        $articlePublished = $getPostRequest[0]->date_gmt;
        $articleModified = $getPostRequest[0]->modified_gmt;
        foreach ($articleTags as $articleTagArr) {
            array_push($keywordsArr, $articleTagArr->name);
        }
        foreach ($getPostRequest[0]->post_categories as $postCategory) {
            $articleCategory = ($postCategory->parent === 0) ? $postCategory->name : '';
        }
        $keywords = implode(",", $keywordsArr);
        $blogPostTitle = $getPostRequest[0]->title->rendered;
        $blogPostDescription = preg_replace('#<[^>]+>#', ' ', $getPostRequest[0]->excerpt->rendered);
        $description = (strlen($blogPostDescription) > $descriptionLimit) ? substr($blogPostDescription, 0, 500) . '...' : $blogPostDescription;
        if ($getPostRequest[0]->better_featured_image === null) {
            $haveImage = false;
        } else {
            $image = $getPostRequest[0]->better_featured_image->media_details->sizes->thumbnail;
        }
        $title = "${siteName} | ${blogPostTitle}";
        $titleWithOutSiteName = $blogPostTitle;
    } else {
        $ogType = 'article';
        $haveImage = true;
        $blogPageSlug = urldecode(explode('/', $url)[1]);
        $getPageRequest = json_decode(httpRequest("${wordpressApiUrl}/pages?slug=${blogPageSlug}"));
        if ($getPageRequest[0]->better_featured_image === null) {
            $haveImage = false;
        } else {
            $image = $getPageRequest[0]->better_featured_image->media_details->sizes->thumbnail;
        }
        $blogPageDescription = preg_replace('#<[^>]+>#', ' ', $getPageRequest[0]->excerpt->rendered);
        $description = (strlen($blogPageDescription) > 500) ? substr($blogPageDescription, 0, 500) . '...' : $blogPageDescription;
        $blogPageTitle = $getPageRequest[0]->title->rendered;
        $title = "${siteName} | ${blogPageTitle}";
        $titleWithOutSiteName = $blogPageTitle;
    }
}
?>
<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="<?php echo $description; ?>"/>
    <meta name="keywords" content="<?php echo $keywords; ?>"/>
    <?php if ($nextLinkNumber !== 0 && $nextLinkNumber !== 1) {
        echo '<link rel="next" href="https://baninab.com/blog'.$paginationLinkTaxonomy.'page/' . $nextLinkNumber . '/" />';
    } ?>
    <link rel="canonical" href="<?php echo $fullUrl; ?>" />
    <?php if ($prevLinkNumber  !== 0) {
        echo '<link rel="prev" href="https://baninab.com/blog'.$paginationLinkTaxonomy.'page/' . $prevLinkNumber . '/" />';
    }
     ?>
    <meta property="og:locale" content="fa_IR" />
    <meta property="og:type" content="<?php echo $ogType; ?>" /> 
    <meta property="og:title" content="<?php echo $title; ?>" />
    <meta property="dc:creator" content="azard.ir" />
    <meta property="og:description" content="<?php echo $description; ?>" />
    <meta property="og:url" content="<?php echo $fullUrl; ?>" />
    <meta property="og:site_name" content="<?php echo $siteName; ?>" />
    <?php if ($haveImage) {
        echo '<meta property="og:image" content="' . $image->source_url . '" /><meta property="og:image:secure_url" content="' . $image->source_url . '"/><meta property="og:image:width" content="' . $image->width . '" /><meta property="og:image:height" content="' . $image->height . '" /><meta name="twitter:creator" content="@Baninab_P" />';
    } ?>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="<?php echo $description; ?>" />
    <meta name="twitter:title" content="<?php echo $titleWithOutSiteName ?>" />
    <meta name="twitter:site" content="@Baninab_P" />
    <?php if ($inArticles) {
        foreach ($articleTags as $articleTag) {
            echo '<meta property="article:tag" content="' . $articleTag->name . '" />';
        }
        if ($articleCategory !== '') {
            echo '<meta property="article:section" content="' . $articleCategory . '" />';
        }
        echo '
        <meta property="article:published_time" content="' . $articlePublished . '" /> 
        <meta property="article:modified_time" content="' . $articleModified . '" /> 
        <meta property="og:updated_time" content="' . $articleModified . '" />
        ';
    } ?>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="theme-color" content="#000000">
    <link rel='dns-prefetch' href='//s.w.org' />
    <link rel="alternate" href="<?php echo $webSiteUrl; ?>" hreflang="fa-ir" />
    <link rel="alternate" type="application/rss+xml" title="<?php echo $siteName; ?>  &raquo; خوراک" href="https://www.baninab.com/wp/feed/" />
    <link rel='https://api.w.org/' href='https://www.baninab.com/wp-json/' />
    <link rel="shortcut icon" href="/favicon.ico">
    <title><?php echo $title; ?></title>
    <link href="https://www.baninab.com/static/css/main.6ec784cb.css" rel="stylesheet">
</head>

<body>
    <?php if (strpos($url, '/fa') !== false) : ?> <noscript style="color: #fff;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;line-height: 2em;">برای مشاهده ی این سایت باید جاوااسکریپت را فعال کنید</noscript>  <?php endif; ?>
    <?php if (strpos($url, '/en') !== false) : ?> <noscript style="color: #fff;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;line-height: 2em;">For full functionality of this site it is necessary to enable JavaScript.</noscript>  <?php endif; ?>
    <div id="root"></div>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122844397-1"></script>
<script async>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-122844397-1');
</script>
    <script type="text/javascript" src="https://www.baninab.com/static/js/main.ca48dfa0.js"></script>
</body>

</html>
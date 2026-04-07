[CmdletBinding()]
param(
  [string]$OutputCsv = "",
  [switch]$SkipDuplicates
)

$ErrorActionPreference = "Stop"

$documents = @(
  [pscustomobject]@{ Index = 1; Title = "AQAR 2022-23"; Url = "http://magadhmahilacollege.org/wp-content/uploads/2024/12/AQAR-2022-23.pdf" },
  [pscustomobject]@{ Index = 2; Title = "AQAR 2021-22"; Url = "http://magadhmahilacollege.org/wp-content/uploads/2023/06/AQAR-2021-22.pdf" },
  [pscustomobject]@{ Index = 3; Title = "AQAR 2020-21"; Url = "http://magadhmahilacollege.org/wp-content/uploads/2022/04/AQAR-2020-21.pdf" },
  [pscustomobject]@{ Index = 4; Title = "AQAR 2019-20"; Url = "https://magadhmahilacollege.org/wp-content/uploads/2022/01/AQAR-2019-20-resubmitted-2.pdf" },
  [pscustomobject]@{ Index = 5; Title = "Academic Calendar 2023-24"; Url = "https://magadhmahilacollege.org/revised-academic-calendar/" },
  [pscustomobject]@{ Index = 6; Title = "Academic Calendar 2022-23"; Url = "http://magadhmahilacollege.org/wp-content/uploads/2024/04/Academic-Calendar-Admission-2022-2023.pdf" },
  [pscustomobject]@{ Index = 7; Title = "Annual Report 2023-24"; Url = "https://magadhmahilacollege.org/wp-content/uploads/2024/12/Annual_Report_2023-24_MMC_Patna.pdf" },
  [pscustomobject]@{ Index = 8; Title = "Feedback Forms"; Url = "https://magadhmahilacollege.org/feedback-forms/" },
  [pscustomobject]@{ Index = 9; Title = "Project Internship & Field Work"; Url = "https://magadhmahilacollege.org/project%20internship-field-work/" },
  [pscustomobject]@{ Index = 10; Title = "Infrastructure and Facilities"; Url = "https://magadhmahilacollege.org/infrastructure-and-facilities/" },
  [pscustomobject]@{ Index = 11; Title = "Academic Opportunities"; Url = "https://magadhmahilacollege.org/academic-opportunities/" },
  [pscustomobject]@{ Index = 12; Title = "Grievance Redressal Cell"; Url = "https://magadhmahilacollege.org/internal-examination-grievances-redressal-cell/" },
  [pscustomobject]@{ Index = 13; Title = "Syllabus NEP"; Url = "https://magadhmahilacollege.org/syllabus-nep/" },
  [pscustomobject]@{ Index = 14; Title = "Annual Report 2023-24 Duplicate"; Url = "https://magadhmahilacollege.org/wp-content/uploads/2024/12/Annual_Report_2023-24_MMC_Patna.pdf" },
  [pscustomobject]@{ Index = 15; Title = "SSS 2023-24"; Url = "https://magadhmahilacollege.org/wp-content/uploads/2025/01/SSS_23-24_250104_131730.pdf" },
  [pscustomobject]@{ Index = 16; Title = "Research"; Url = "https://magadhmahilacollege.org/research/" },
  [pscustomobject]@{ Index = 17; Title = "NSS and NCC Activities"; Url = "https://magadhmahilacollege.org/extension-activities-nss-ncc/" },
  [pscustomobject]@{ Index = 18; Title = "Academic Infrastructure"; Url = "https://magadhmahilacollege.org/academic-infrastructure-2/" },
  [pscustomobject]@{ Index = 19; Title = "Sports Facilities"; Url = "https://magadhmahilacollege.org/sports-facilities/" },
  [pscustomobject]@{ Index = 20; Title = "Central Library"; Url = "https://magadhmahilacollege.org/central-library/" },
  [pscustomobject]@{ Index = 21; Title = "MIS"; Url = "https://magadhmahilacollege.org/mis/" },
  [pscustomobject]@{ Index = 22; Title = "Infrastructure Maintenance"; Url = "https://magadhmahilacollege.org/infrastructure-maintenance/" },
  [pscustomobject]@{ Index = 23; Title = "Academics"; Url = "https://magadhmahilacollege.org/academics/" },
  [pscustomobject]@{ Index = 24; Title = "Student Cabinet 2023-24"; Url = "https://magadhmahilacollege.org/student-cabinet-2023-2024/" },
  [pscustomobject]@{ Index = 25; Title = "Alumni Meet 2023"; Url = "https://magadhmahilacollege.org/alumni-meet-2023-on-30th-may-at-magadh-mahila-college/" },
  [pscustomobject]@{ Index = 26; Title = "Mission Vision"; Url = "https://magadhmahilacollege.org/vision-mission/" },
  [pscustomobject]@{ Index = 27; Title = "Student Cabinet Oath Taking"; Url = "https://magadhmahilacollege.org/oath-taking-ceremony-of-newly-elected-students-cabinet-members-of-2023-24-session/" },
  [pscustomobject]@{ Index = 28; Title = "International Conference"; Url = "https://magadhmahilacollege.org/international-conference-on-technologicalinnovations-for-climate-change-mitigation-and-global-warming/" },
  [pscustomobject]@{ Index = 29; Title = "Cells 2023-24"; Url = "https://magadhmahilacollege.org/cells-2023-2024/" },
  [pscustomobject]@{ Index = 30; Title = "Organogram"; Url = "https://magadhmahilacollege.org/organisation-structure/" },
  [pscustomobject]@{ Index = 31; Title = "Audit Report 2023-24"; Url = "https://magadhmahilacollege.org/pdf/audit_report.pdf" },
  [pscustomobject]@{ Index = 32; Title = "Tenders"; Url = "https://magadhmahilacollege.org/category/tenders/" },
  [pscustomobject]@{ Index = 33; Title = "National Seminar on Green Chemistry"; Url = "https://magadhmahilacollege.org/national-seminar-on-trends-in-green-chemistry-and-sustainable-development/" },
  [pscustomobject]@{ Index = 34; Title = "Minutes of IQAC"; Url = "https://magadhmahilacollege.org/minutes-of-iqac/" },
  [pscustomobject]@{ Index = 35; Title = "Annual Reports"; Url = "https://magadhmahilacollege.org/annual-reports/" },
  [pscustomobject]@{ Index = 36; Title = "Gender Sensitization"; Url = "https://magadhmahilacollege.org/gender-sensitization/" },
  [pscustomobject]@{ Index = 37; Title = "7.1-9 Programmes"; Url = "http://magadhmahilacollege.org/wp-content/uploads/2025/01/7_1-9_programmes.pdf" },
  [pscustomobject]@{ Index = 38; Title = "Best Practices"; Url = "https://magadhmahilacollege.org/best-practices-2023-24/" }
)

if ($SkipDuplicates) {
  $documents = $documents |
    Sort-Object Url, Index |
    Group-Object Url |
    ForEach-Object { $_.Group[0] } |
    Sort-Object Index
}

$handler = [System.Net.Http.HttpClientHandler]::new()
$handler.AllowAutoRedirect = $true
$handler.MaxAutomaticRedirections = 10
$handler.AutomaticDecompression = [System.Net.DecompressionMethods]::GZip -bor [System.Net.DecompressionMethods]::Deflate

$client = [System.Net.Http.HttpClient]::new($handler)
$client.Timeout = [TimeSpan]::FromSeconds(30)
$client.DefaultRequestHeaders.UserAgent.ParseAdd("Mozilla/5.0 (Windows NT 10.0; Win64; x64) NAAC-Link-Checker/1.0")

function Send-Request {
  param(
    [string]$Url,
    [string]$Method
  )

  $request = [System.Net.Http.HttpRequestMessage]::new([System.Net.Http.HttpMethod]::$Method, $Url)

  if ($Method -eq "Get") {
    $request.Headers.Range = [System.Net.Http.Headers.RangeHeaderValue]::new(0, 0)
  }

  try {
    $response = $client.SendAsync(
      $request,
      [System.Net.Http.HttpCompletionOption]::ResponseHeadersRead
    ).GetAwaiter().GetResult()

    return [pscustomobject]@{
      Response = $response
      Error = $null
    }
  }
  catch {
    $request.Dispose()
    return [pscustomobject]@{
      Response = $null
      Error = $_.Exception.Message
    }
  }
}

function Test-Link {
  param([pscustomobject]$Document)

  $headAttempt = Send-Request -Url $Document.Url -Method "Head"
  $response = $headAttempt.Response
  $usedMethod = "HEAD"
  $note = ""

  if (-not $response -or [int]$response.StatusCode -in 403, 405, 500, 501) {
    if ($response) {
      $response.Dispose()
    }

    $getAttempt = Send-Request -Url $Document.Url -Method "Get"
    $response = $getAttempt.Response
    $usedMethod = "GET"
    $note = if ($getAttempt.Error) { $getAttempt.Error } else { "HEAD unavailable, used GET fallback" }
  } elseif ($headAttempt.Error) {
    $note = $headAttempt.Error
  }

  if (-not $response) {
    return [pscustomobject]@{
      Index = $Document.Index
      Title = $Document.Title
      OriginalUrl = $Document.Url
      FinalUrl = ""
      Method = $usedMethod
      StatusCode = ""
      Status = "Failed"
      ContentType = ""
      IsPdf = $false
      Note = if ($note) { $note } else { "Request failed" }
    }
  }

  $finalUrl = $response.RequestMessage.RequestUri.AbsoluteUri
  $contentType = if ($response.Content.Headers.ContentType) {
    $response.Content.Headers.ContentType.MediaType
  } else {
    ""
  }

  $isPdf = $contentType -eq "application/pdf" -or $finalUrl -match "\.pdf($|[?#])"
  $statusCode = [int]$response.StatusCode
  $status = if ($response.IsSuccessStatusCode) { "OK" } else { "HTTP $statusCode" }

  $result = [pscustomobject]@{
    Index = $Document.Index
    Title = $Document.Title
    OriginalUrl = $Document.Url
    FinalUrl = $finalUrl
    Method = $usedMethod
    StatusCode = $statusCode
    Status = $status
    ContentType = $contentType
    IsPdf = $isPdf
    Note = $note
  }

  $response.Dispose()
  return $result
}

try {
  $results = foreach ($document in $documents) {
    Write-Host ("Checking [{0}] {1}" -f $document.Index, $document.Title) -ForegroundColor Cyan
    Test-Link -Document $document
  }
}
finally {
  $client.Dispose()
  $handler.Dispose()
}

$results |
  Select-Object Index, Title, StatusCode, Status, IsPdf, ContentType, FinalUrl |
  Format-Table -AutoSize

$okCount = ($results | Where-Object { $_.Status -eq "OK" }).Count
$pdfCount = ($results | Where-Object { $_.IsPdf }).Count
$failedCount = $results.Count - $okCount

Write-Host ""
Write-Host ("Checked: {0}" -f $results.Count) -ForegroundColor White
Write-Host ("Working responses: {0}" -f $okCount) -ForegroundColor Green
Write-Host ("PDF responses: {0}" -f $pdfCount) -ForegroundColor Green
Write-Host ("Failed responses: {0}" -f $failedCount) -ForegroundColor Yellow

if ($OutputCsv) {
  $results | Export-Csv -Path $OutputCsv -NoTypeInformation -Encoding UTF8
  Write-Host ("CSV written to: {0}" -f $OutputCsv) -ForegroundColor Green
}

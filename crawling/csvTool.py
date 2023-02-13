import csv

f = open('./20221125.csv', 'r', encoding='utf-8')
rdr = csv.reader(f)

count = 0
tmp = set()
for line in rdr:
    # print(line[1])
    tmp.add(line[1])
    count += 1
    # print(line[10])
f.close()

print(count)
print(len(tmp))
